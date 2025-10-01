const bcrypt = require("bcryptjs");
const fieldValidation = require("../utils/field-validator");
const User = require("../models/User");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const LabAttendant = require("../models/LabAttendant");
const deleter = require("../utils/deleter");
const util = require("util");
const responseHandler = require("../utils/response-handler");
const config = require('../config');
const { createBcrypt } = require("../utils/bcrypt-helper");
var async = require('async');
global.crypto = require('crypto')



const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const JWT = require('jsonwebtoken');
const FrontDeskOfficer = require("../models/FrontDeskOfficer");
const Pharmacy = require("../models/Pharmacy");


const url = `http://portal.medfestng.com`;

function search(req, res, next) {
  let query = req.query.searchQuery;
  let role = 'patient';
  if (req.user.role == 'admin') {
    role = 'hospital';
  } else if (req.user.role == 'hospital') {
    role = ['doctor', 'patient'];
  }
  User.find({
    role: role,
    $or: [
      { username: { $regex: query } },
      { name: { $regex: query } },
    ]
  })
    .skip(+req.query.limit * +req.query.page)
    .limit(+req.query.limit)

    .exec(
      function (err, doc) {
        console.log('-->', doc, role, query)
        if (err) { responseHandler(res, 500, err); return; };

        responseHandler(res, 200, doc);

      })
}

function getAll(req, res, next) {
  res.json({ msg: "Hello" });
}

async function createUser(req) {
  console.log(req.body);
  const hash = await createBcrypt(req.body.password)
  let myUser = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    approved: req.body.role === "patient" ? false : true,
    password: hash,
    username: await getUserName(req.body.role),
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city || '',
    state: req.body.state || '',
    image: req.body.image || '/images/user.jpg'
  };
  if (myUser.role === 'patient' || myUser.role === 'labAttendant' || myUser.role === 'doctor'
    || myUser.role === 'FDO' || myUser.role === 'pharmacy') {
    if (req.user.role === 'FDO') {
      myUser.hospital = req.user.hospital;
    } else {
      myUser.hospital = req.user._id;
    }
  } else {
    myUser.hospital = null;
  }

  return await new User(myUser).save();
}

async function toggleActive(req, res, next) {

  try {
    console.log(req.params)
    userObj = await User.findOne({ _id: req.params.id })
    console.log('-->', userObj)
    userObj.active = !userObj.active
    let newDoc = await userObj.save();
    responseHandler(res, 200, { msg: `User ${newDoc.active ? 'Active' : 'Inactive'}` });
  } catch (e) {
    console.log(e)
    responseHandler(res, 500, { msg: 'User not Updated' });
  }
}

async function toggleDelete(req, res, next) {
  try {
    console.log(req.params)
    userObj = await User.findOne({ _id: req.params.id })
    console.log('-->', userObj)
    userObj.isDelete = !userObj.isDelete
    let newDoc = await userObj.save();
    responseHandler(res, 200, { msg: `User ${newDoc.isDelete ? 'Deleted' : 'Not Deleted'}` });
  } catch (e) {
    console.log(e)
    responseHandler(res, 500, { msg: 'User not deleted' });
  }
}

async function signup(req, res, next) {

  try {
    if (!fieldValidation(req, res)) return;
    let newuser = await createUser(req);
    console.log(newuser)
    if (newuser) {
      responseHandler(res, 200, newuser);
    }
  } catch (e) {
    console.error(e);
    responseHandler(res, 500, { msg: 'User Not created' });

  }


}

async function signIn(req, res, next) {
  if (!req.user.approved) {
    return res.status(201).json({ success: false, msg: `Your account is not approved, Contact to Administrator` });
  }
  if (!req.user.active) {
    return res.status(201).json({ success: false, msg: `Your account is inactive, Contact to Administrator` });
  }
  if (!req.user.isEmailVerified && req.user.role !== 'admin') {
    return res.status(422).json({ info: 'Verify Your Email first' });
  }
  if (req.user) {
    // Generate token
    let roleId;
    if (req.user.role === 'patient') { roleId = await Patient.findOne({ user: req.user._id }, '_id') }
    if (req.user.role === 'doctor') { roleId = await Doctor.findOne({ user: req.user._id }, '_id') }
    if (req.user.role === 'labAttendant') { roleId = await LabAttendant.findOne({ user: req.user._id }, '_id') }
    if (req.user.role === 'FDO') { roleId = await FrontDeskOfficer.findOne({ user: req.user._id }, '_id') }
    if (req.user.role === 'pharmacy') { roleId = await Pharmacy.findOne({ user: req.user._id }, '_id') }

    const token = signToken(req.user);
    res.cookie('access_token', token, {
      httpOnly: true
    });
    let role;
    if (roleId && roleId._id) role = roleId._id;
    responseHandler(res, 200, { user: req.user, roleId: role, token: token });
  }
}

signToken = user => {
  return JWT.sign({
    iss: 'CodeWorkr',
    sub: user._id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1) // current time + 1 day ahead
  }, config.JWT_SECRET);
}


const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

async function getUserName(role) {
  let username = '';
  if (role === "patient") username = 'MFP' + await getPatientCode();
  if (role === "admin") username = 'MFA' + getRandomInt(100000);
  if (role === "hospital") username = 'MFH' + getRandomInt(100000);
  if (role === "doctor") username = 'MFM' + getRandomInt(100000);
  if (role === "labAttendant") username = 'MFL' + getRandomInt(100000);
  if (role === "FDO") username = 'MFF' + getRandomInt(100000);
  if (role === "pharmacy") username = 'MPH' + getRandomInt(100000);

  let user = await User.findOne({ username: username });
  console.log('----> get user', user)
  if (user) return getUserName(role);
  console.log(username)
  return username;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function getPatientCode() {
  const todaysDate = new Date()
  const year = todaysDate.getFullYear()
  const month = todaysDate.getMonth()

  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  const patientCode = await User.find(
    {
      role: "patient",
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    },
  ).countDocuments()
    .then((result) => {
      const newDigit = (result+1)
      const newMonth = month + 1
      const splittedYear= year % 100
      return `${newDigit}${newMonth}${splittedYear}`;
    })
    .catch((err) => {
      return getRandomInt(100000);
    });

  return patientCode
}

function updateUser(req, res, next) {

  const id = req.params.id;
  const updateObj = req.body;
  updateObj.image = req.file ? `/images/${req.file.filename}` : req.body.image;
  console.log('typeof(updateObj.friend) === string', typeof (updateObj.friend))
  if (typeof (updateObj.friend) === 'string') {
    updateObj.friend = []
  }
  // console.log('updateObj ---- ', updateObj)
  User.findByIdAndUpdate({ _id: id }, { $set: updateObj }, (error, document) => {
    console.log('error ', error)
    if (error) {
      responseHandler(res, 500, error.msg);
    } else {
      responseHandler(res, 200, document);
    }
  })

}

function getAdminID(req, res, next) {
  User.find({ role: 'admin' }, '_id', function (err, doc) {
    if (err) {
      responseHandler(res, 500, err);
    }
    responseHandler(res, 200, doc[0]._id);
  })
}

// forgot password
function forgotPassword(req, res, next) {
  // console.log(req.body);
  async.waterfall([
    function (done) {
      crypto.randomBytes(20, function (err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },

    function (token, done) {
      User.findOne({ email: req.body.email }, function (err, user) {
        if (!user) {
          return res.status(204).json({ error: 'No account with that email address exists.' });
        }

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        user.save(function (err) {
          done(err, token, user);
        });
      });
    },
    function (token, user, done) {
      var mailOptions = {
        to: user.email,
        from: 'medfestng@gmail.com',
        subject: 'MEDFEST Password Reset',
        text: 'You are receiving this because you  have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          `${url}/resetpassword/${token}\n\n` +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      config.transport.sendMail(mailOptions, function (err) {
        console.log(err);
        done(err, 'done');
      });
    }
  ], function (err) {
    if (err) return next(err);
    res.status(200).json({ info: 'An e-mail has been sent with further instructions.' });
  });
}

// resets password
function resetPassword(req, res, next) {
  // console.log(req.body);
  async.waterfall([
    function (done) {
      User.findOne({ resetPasswordToken: req.body.token, resetPasswordExpires: { $gt: Date.now() } }, async function (err, user) {
        if (!user) {
          return res.status(204).json({ 'error': 'Password reset token is invalid or has expired.' });
        }

        const hash = await createBcrypt(req.body.password)

        // user.setPassword(req.body.password);
        user.password = hash;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        user.save(function (err) {
          done(err, user);
        });
      });
    },
    function (user, done) {
      var mailOptions = {
        to: user.email,
        from: 'medfestng@gmail.com',
        subject: 'MEDFEST Password Change',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      config.transport.sendMail(mailOptions, function (err) {
        done(err, 'done');
      });
    }
  ], function (err) {
    if (err) return next(err);
    return res.json({ info: 'Success! Your password has been changed.' });
  });
}


// functions sends Verification Email
function sendVerificationEmail(req, res, next) {
  User.findOne({ email: req.body.email }, async function (err, user) {
    if (!user) {
      return res.status(422).json({ info: "User not found" }); // if user already exists
    } else {
      var token = crypto.randomBytes(20).toString('hex');
      user.emailVerifyToken = token;
      user.emailVerifyExpires = Date.now() + 3600000; // 1 hour

      // sends Verification Email
      var mailOptions = {
        to: user.email,
        from: 'medfestng@gmail.com',
        subject: 'MEDFEST Email Verification',
        text:
          'Please click on the following link, or paste this into your browser to verify email:\n\n' +
          `${url}/emailVerify/${token}\n\n` +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      await config.transport.sendMail(mailOptions, function (err) {
        if (err) {
          return res.sendStatus(500, { messsage: 'Server Error' });
        }
      });
      user.save().then(function () {
        responseHandler(res, 200, { info: 'Verification Email has been sent' });
      }).catch(next);
    }
  });
}

// verifies Email
function verifyEmail(req, res) {
  User.findOne(
    {
      // email: req.body.email,
      emailVerifyToken: req.body.accessToken,
      emailVerifyExpires: { $gt: Date.now() },
    },
    async function (err, user) {
      if (!user) {
        res.status(422).json({
          info: "Verify Email token is invalid or has expired.",
        });
        // if (!user.isActive) {
        //     return res.status(401);
        // }
      } else {
        user.emailVerifyToken = undefined;
        user.emailVerifyExpires = undefined;
        user.isEmailVerified = true;
        let roleId;
        if (user.role === 'patient') { roleId = await Patient.findOne({ user: user._id }, '_id') }
        if (user.role === 'doctor') { roleId = await Doctor.findOne({ user: user._id }, '_id') }
        if (user.role === 'labAttendant') { roleId = await LabAttendant.findOne({ user: user._id }, '_id') }
        if (user.role === 'FDO') { roleId = await FrontDeskOfficer.findOne({ user: user._id }, '_id') }
        if (user.role === 'pharmacy') { roleId = await Pharmacy.findOne({ user: user._id }, '_id') }

        const token = signToken(user);
        res.cookie('access_token', token, {
          httpOnly: true
        });
        let role;
        if (roleId && roleId._id) role = roleId._id;

        user.save(function () {
          responseHandler(res, 200, { user: user, roleId: role, token: token });
          // return res.json({ status: 200, info: "Your Email is successfully Verified.", user: user.toAuthJSON() });
        });
      }
    }
  );
}

function updatePassword(req, res) {
  if (!req.body.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  if (!req.body.newPassword) {
    return res.status(422).json({ errors: { newPassword: "can't be blank" } });
  }
  console.log('req.body', req.body);

  User.findById(req.user._id).then(async function (user) {
    if (!user) { return res.sendStatus(401); }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(422).json({ errors: ' password is invalid' });
    } else {

      const hash = await createBcrypt(req.body.newPassword)
      user.password = hash;
      return user.save().then(function () {
        responseHandler(res, 200, { info: "password changed" });
      });
    }
  })
}

module.exports = {
  search,
  signup,
  signIn,
  getAll,
  createUser,
  toggleActive,
  toggleDelete,
  updateUser,
  getAdminID,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
  updatePassword,
};
