const bcrypt = require("bcryptjs");
const fieldValidation = require("../utils/field-validator");
const User = require("../models/User");
const Hospital = require("../models/Hospital");
const deleter = require("../utils/deleter");
const util = require("util");
const responseHandler = require("../utils/response-handler");
const userController = require('./usersController');

async function createHospital(req, res, next) {
    try {
        if (!fieldValidation(req, res)) return;
        // console.log('--->', req.body);
        let newuser = await userController.createUser(req);
        newuser.approved = true;
        newuser.addFriend(req.user._id);
        newuser.save();
        if (newuser) {
            let hospital = {
                user: newuser._id,
                directorName: req.body.directorName,
                directorPhone: req.body.directorPhone,
                description: req.body.description,
                createdBy: req.user._id
            };
            let newhospital = await new Hospital(hospital).save();
            let obj = Object.assign({}, newuser._doc, newhospital._doc);

            responseHandler(res, 200, obj);
        }
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Hospital Not created' });
    }
}
async function getAll(req, res, next) {
    var pageOptions = {
        page: +req.query.page || 0,
        limit: +req.query.limit || 10
    }

    let c = await User.count({ role: 'hospital' });
    User.find({ active: req.query.active, role: 'hospital' })
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .exec(function (err, docs) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, { docs, c })
        })
}
function get(req, res, next) {

    Hospital.findOne({ user: req.params.id }).populate('user')
        .exec(
            function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };

                responseHandler(res, 200, doc);

            })

}


async function updateHospital(req, res, next) {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        await Hospital.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Hospital' });
    }

}



module.exports = {
    createHospital,
    get,
    getAll,
    updateHospital

};


