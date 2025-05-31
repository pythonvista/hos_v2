const bcrypt = require("bcryptjs");
const fieldValidation = require("../utils/field-validator");
const LabAttendant = require("../models/LabAttendant");
const User = require("../models/User");

const deleter = require("../utils/deleter");
const util = require("util");
const responseHandler = require("../utils/response-handler");
const userController = require('./usersController');

async function get(req, res, next) {

    var pageOptions = {
        page: +req.query.page || 0,
        limit: +req.query.limit || 10
    }
    if (pageOptions.page > 0) {
        pageOptions.page -= 1;
    }
    query = {};

    if (req.user.role == 'doctor') {
        query["user.hospital"] = req.user.hospital
    } else {
        query["user.hospital"] = req.user._id;
    }
    // query = {
    //     "user.hospital": req.user._id
    // };
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
    let c = await User.count({ role: 'labAttendant', hospital: query["user.hospital"] });
    LabAttendant.aggregate(aggregationStages)
        .exec(function (err, docs) { // The return is an array btw.
            if (err) {
                responseHandler(res, 500, err);
            }
            responseHandler(res, 200, { docs, c })
        });
}

function getById(req, res, next) {
    LabAttendant.findOne({ _id: req.params.id }).populate('user')
        .exec(
            function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };

                responseHandler(res, 200, doc);

            })
}

async function create(req, res, next) {
    try {
        if (!fieldValidation(req, res)) return;
        let newuser = await userController.createUser(req);
        newuser.approved = true;
        newuser.save();
        if (newuser) {
            let labAttendant = {
                user: newuser._id,
                category: req.body.category,
                description: req.body.description,
                gender: req.body.gender,
                dob: new Date(req.body.dob),
                createdBy: req.user._id
            };
            let newlabAttendant = await new LabAttendant(labAttendant).save();
            let obj = Object.assign({}, newuser._doc, newlabAttendant._doc);

            responseHandler(res, 200, obj);
        }
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Lab Attendant Not created' });
    }
}

function update(req, res, next) {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        LabAttendant.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Lab Attendant' });
    }
}

function delet(req, res, next) {

}
function search(req, res, next) {
    let query = req.query.searchQuery;
    LabAttendant.find()
        .limit(+req.query.limit)
        .populate({
            path: 'user',
            match: {
                $or: [
                    { username: { $regex: query } },
                    { name: { $regex: query } },
                ]
            }
        })
        .exec(
            function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };
                doc = doc.filter(el => el.user != null)
                responseHandler(res, 200, doc);

            })
}

async function getLabAttendentList(req, res) {
    let hospital;

    if (req.user.role == 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }
    LabAttendant.find().populate('user', 'name _id hospital', { hospital: hospital }).exec(function (err, docs) {
        if (err) {
            responseHandler(res, 500, err);
        }
        docs = docs.filter(d => d.user !== null);

        responseHandler(res, 200, docs)
    });
}

module.exports = {
    create,
    getById,
    get,
    update,
    delet,
    search,
    getLabAttendentList
};