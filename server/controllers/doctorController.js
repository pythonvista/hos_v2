const bcrypt = require("bcryptjs");
const fieldValidation = require("../utils/field-validator");
const Doctor = require("../models/Doctor");
const User = require("../models/User");
const deleter = require("../utils/deleter");
const util = require("util");
const responseHandler = require("../utils/response-handler");
const userController = require('./usersController');
const { ComponentFactoryResolver } = require("@angular/core");


const getOrderById = async (req, res) => {
  let id = req.params.id.toString();
  const ObjectId = mongoose.Types.ObjectId
  try {

  } catch (error) {
    console.log(error);
  }
}

async function getAll(req, res, next) {
  var pageOptions = {
    page: +req.query.page || 0,
    limit: +req.query.limit || 10
  }

  if (pageOptions.page > 0) {
    pageOptions.page -= 1;
  }

  query = {};
  if (req.user.role == 'pharmacy' || req.user.role == 'labAttendant') {
    query["user.hospital"] = req.user.hospital
  } else {
    query["user.hospital"] = req.user._id;
  }
  const aggregationStages = [{
    $lookup: {
      from: "users",
      localField: "user",
      foreignField: "_id",
      as: "user"
    }

  }, { $unwind: "$user" },
  {
    $match: query
  },
  { $skip: pageOptions.page * pageOptions.limit },
  { $limit: pageOptions.limit },
  ];
  let c = await User.count({ role: 'doctor', hospital: query["user.hospital"] });
  Doctor.aggregate(aggregationStages)
    .exec(function (err, docs) { // The return is an array btw.
      if (err) {
        responseHandler(res, 500, err);
      }
      responseHandler(res, 200, { docs, c })
    });
}

function get(req, res, next) {
  Doctor.findOne({
    $or: [{ _id: req.params.id },
    { user: req.params.id }]
  }).populate('user')
    .exec(
      function (err, doc) {
        if (err) { responseHandler(res, 500, err); return; };

        responseHandler(res, 200, doc);

      })
}

function search(req, res, next) {
  let query = req.query.searchQuery;
  let hospital;

  if (req.user.role == 'hospital') {
    hospital = req.user._id;
  } else {
    hospital = req.user.hospital;
  }
  User.find({
    role: 'doctor', $or: [
      { username: { $regex: new RegExp(query, 'i') } },
      { name: { $regex: new RegExp(query, 'i') } },
    ],
  })
    .limit(+req.query.limit).exec(
      function (err, doc) {
        if (err) { responseHandler(res, 500, err); return; };
        // doc = doc.filter(el => el.user != null)
        responseHandler(res, 200, doc);

      })
}
async function createDoctor(req, res, next) {
  try {
    if (!fieldValidation(req, res)) return;
    let newuser = await userController.createUser(req);
    newuser.approved = true;
    newuser.save();
    if (newuser) {
      let doctor = {
        user: newuser._id,
        cadre: req.body.cadre,
        department: req.body.department,
        specialty: req.body.specialty,
        description: req.body.description,
        gender: req.body.gender,
        dob: new Date(req.body.dob),
        createdBy: req.user._id
      };
      let newDoctor = await new Doctor(doctor).save();
      let obj = Object.assign({}, newuser._doc, newDoctor._doc);

      responseHandler(res, 200, obj);
    }
  } catch (e) {
    console.error(e);
    responseHandler(res, 500, { msg: 'Doctor Not created' });
  }
}

async function updateDoctor(req, res, next) {
  try {
    const id = req.params.id;
    const updateObj = req.body;
    await Doctor.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
      if (error) {
        responseHandler(res, 500, error.msg);
      }
      responseHandler(res, 200, document);
    })
  } catch (e) {
    console.error(e);
    responseHandler(res, 500, { msg: 'Error Updating Doctor' });
  }
}


module.exports = {
  createDoctor,
  get,
  getAll,
  search,
  updateDoctor
};
