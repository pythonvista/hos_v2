const fieldValidation = require("../utils/field-validator");
const LabReport = require("../models/LabReport");
const responseHandler = require("../utils/response-handler");
const LabAttendant = require("../models/LabAttendant");
const { query } = require("express-validator");


async function getByPatientId(req, res, next) {
    let query = {};
    query.patient = req.params.id
    const count = await LabReport.countDocuments(query);
    var pageOptions = {
        page: +req.query.page || 0,
        limit: +req.query.limit || 10
    }
    LabReport.find(query)
        .sort({ updatedAt: -1 })
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .populate({
            path: 'hospital',
            populate: { path: 'user' }
        })
        .populate('user')
        .exec(function (err, doc) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, { doc, count: count });
        })
}

function getByCategory(req, res, next) {
    // var pageOptions = {
    //     page: +req.query.page || 0,
    //     limit: +req.query.limit || 10
    // }

    // .skip(pageOptions.page * pageOptions.limit)
    // .limit(pageOptions.limit)
    LabReport.find({ category: req.query.category })
        .exec(function (err, doc) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, doc);
        });
}

function get(req, res, next) {
    // var pageOptions = {
    //     page: +req.query.page || 0,
    //     limit: +req.query.limit || 10
    // }

    // LabReport.find()
    //     .skip(pageOptions.page * pageOptions.limit)
    //     .limit(pageOptions.limit).populate('user')
    //     .exec(function(err, doc) {
    //         if (err) { responseHandler(res, 500, err); return; };
    //         responseHandler(res, 200, doc);
    //     })
}

function getById(req, res, next) {
    LabReport.findOne({ _id: req.params.id }).populate('user')
        .exec(
            function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };

                responseHandler(res, 200, doc);

            })
}
async function getByLabAttendant(req, res, next) {
    // let l = await LabAttendant.findOne({ _id: req.user.roleId }, 'category')
    let hospital;
    if (req.user.role === 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }
    let query = [
        { by: req.user._id },
        { status: 'scheduled' },
        // { category: l.category }
    ]

    try {
        await LabReport.find({ $or: query, hospital: hospital }).sort({ createdAt: 'desc' }).populate('patient', '_id user').populate('doctor', '_id user').exec(function (err, docs) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, docs);
        })
    }
    catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error in Server' });
    }
}
async function create(req, res, next) {
    try {
        if (!fieldValidation(req, res)) return;

        let labReport = {
            patient: req.body.patient,
            doctor: req.body.doctor,
            subject: req.body.subject,
            category: req.body.category,
            subCategory: req.body.subCategory,
            hospital: req.user.role === 'hospital' ? req.user._id : req.user.hospital,

        };
        let newlabReport = await new LabReport(labReport).save();


        responseHandler(res, 200, newlabReport);

    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Lab Attendant Not created' });
    }
}

function update(req, res, next) {
    try {
        const id = req.params.id;
        var updateObj = {}
        updateObj.files = [];


        // console.log("====>", req.body);
        if (req.body.files) {
            updateObj.files = req.body.files;
        }

        if (req.body.status) {
            updateObj.status = req.body.status;
        }

        if (req.body.description) {
            updateObj.description = req.body.description;
        }

        if (req.body.by) {
            updateObj.by = req.body.by;
        }

        LabReport.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                console.error("===> in error ", error);
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error("===> in error ", e);
        responseHandler(res, 500, { msg: 'Error Updating Lab Attendant' });
    }
}

function delet(req, res, next) {

}

module.exports = {
    create,
    getById,
    get,
    getByPatientId,
    getByCategory,
    getByLabAttendant,
    update,
    delet
};