const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const { ExtractJwt } = require('passport-jwt');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require("../models/User");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const LabAttendant = require("../models/LabAttendant");
const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.headers.authorization;
    }
    return token;
}

// JSON WEB TOKENS STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: config.JWT_SECRET,
    passReqToCallback: true
}, async(req, payload, done) => {
    try {
        // Find the user specified in token
        const user = await User.findById(payload.sub);
        // console.log(user);
        // If user doesn't exists, handle it
        if (!user) {
            return done(null, false);
        }

        // Otherwise, return the user
        let roleId;
        if (user.role === 'patient') { roleId = await Patient.findOne({ user: user._id }, '_id') }
        if (user.role === 'doctor') { roleId = await Doctor.findOne({ user: user._id }, '_id') }
        if (user.role === 'labAttendant') { roleId = await LabAttendant.findOne({ user: user._id }, '_id') }
        let userObj = user;


        if (roleId && roleId._id) userObj = Object.assign({}, user._doc, { roleId: roleId._id });

        req.user = userObj;
        done(null, userObj);
    } catch (error) {
        done(error, false);
    }
}));


// LOCAL STRATEGY
passport.use(new LocalStrategy(async(username, password, done) => {
    try {
        // Find the user given the email
        const user = await User.findOne({ username: username });

        // If not, handle it
        if (!user) {
            return done(null, false);
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);

        // If not, handle it
        if (!isMatch) {
            return done(null, false);
        }

        // Otherwise, return the user
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));