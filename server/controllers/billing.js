const fieldValidation = require("../utils/field-validator");
const Billing = require("../models/Billing");
const responseHandler = require("../utils/response-handler");
const userController = require('./usersController');

// return bills for a patient
async function getByPatientId(req, res, next) {
    let query = {};
    if (req.user.role === 'patient') {
        query.patient = req.params.patientID
    }
    else {
        if (req.user.role === 'hospital') {
            query.hospital = req.user._id;
        }
        else {
            query.hospital = req.user.hospital;
        }
        query.patient = req.params.patientID
    }

    const count = await Billing.countDocuments(query);


    var pageOptions = {
        page: +req.query.page || 0,
        limit: +req.query.limit || 10
    }
    Billing.find(query)
        .sort({ date: -1 })
        .skip(pageOptions.page * pageOptions.limit)
        .limit(pageOptions.limit)
        .exec(function (err, doc) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, { doc, count: count });
        })
}


// returns all billings
async function get(req, res, next) {
    let query = {};
    // console.log("====>", req.user);
    if (req.user.role === 'patient') query.patient = req.user.roleId;
    if (req.user.role === 'doctor') query.doctor = req.user.roleId;
    if (req.user.role === 'hospital') query.hospital = req.user._id;
    if (req.user.role === 'FDO' || req.user.role === 'pharmacy') query.createdBy = req.user._id;


    if (req.user.role === 'hospital') {

        let toDate = null;
        let fromDate = null;

        if (req.query.fromDate !== null && req.query.fromDate !== "null") {
            fromDate = new Date(req.query.fromDate)
        }
        if (req.query.toDate !== null && req.query.fromDate !== "null") {
            toDate = new Date(req.query.toDate);
        }

        if (fromDate !== null && toDate !== null) {
            query.createdAt = { "$gte": fromDate, "$lt": toDate };
        }
        else {
            fromDate = new Date();
            toDate = new Date();
            toDate.setDate(fromDate.getDate() - 30);
            query.createdAt = { "$gte": fromDate, "$lt": toDate };
        }

        // console.log("--->", fromDate, toDate);
    }

    const count = await Billing.countDocuments(query);

    var pageOptions = {
        page: +req.query.page || 0,
        limit: +req.query.limit || 10
    }

    if (pageOptions.page > 0) {
        pageOptions.page -= 1;
    }

    let totalPaymentsValue = 0;
    if (req.user.role === 'hospital') {
        totalPaymentsValue = await Billing.aggregate([
            { $match: query },
            { $group: { _id: null, amount: { $sum: "$totalAmount" } } }
        ]).exec();
    }

    // console.log(req.user);

    try {
        Billing.find(query)
            .sort({
                createdAt: -1
            })
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
            .populate({
                path: 'doctor',
                populate: { path: 'user' }
            })
            .populate({
                path: 'patient',
                populate: { path: 'user' }
            })
            .populate({
                path: 'createdBy',
                populate: { path: 'user' }
            }).
            populate({
                path: 'hospital',
                populate: { path: 'user' }
            })
            .exec(function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };
                responseHandler(res, 200, { doc, count: count, totalPaymentsValue: totalPaymentsValue });
            })
    }
    catch (err) {
        if (err) { responseHandler(res, 500, err); return; };

    }


}

// returns single billing 
async function getById(req, res, next) {
    Billing.findOne({ _id: req.params.id }).populate({
        path: 'doctor',
        populate: { path: 'user' }
    })
        .populate({
            path: 'patient',
            populate: { path: 'user' }
        })
        .populate({
            path: 'createdBy',
            populate: { path: 'user' }
        }).
        populate({
            path: 'hospital',
            populate: { path: 'user' }
        }).exec(function (err, doc) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, doc);
        })
}

// issue in API
async function getByDoctor(req, res, next) {
    let l = await Billing.findOne({ _id: req.user.roleId }, 'category')
    let query = [
        { by: req.user.roleId },
        { category: l.category }
    ]
    Billing.find({ $or: query }, (err, docs) => {
        if (err) { responseHandler(res, 500, err); return; };
        responseHandler(res, 200, docs);
    })
}

// creates Billing
async function create(req, res, next) {
    try {
        if (!fieldValidation(req, res)) return;

        let billing = {
            patient: req.body.patient,
            doctor: req.body.doctor,
            hospital: req.user.role === 'hospital' ? req.user._id : req.user.hospital,
            items: req.body.items,
            createdBy: req.user._id,
            discount: req.body.discount,
            totalAmount: req.body.totalAmount
            // paymentMethod:req.body.paymentMethod
        };
        let newBilling = await new Billing(billing).save();
        responseHandler(res, 200, newBilling);

    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Billing  Not created' });
    }
}

function update(req, res, next) {
    try {
        const id = req.params.id;
        const updateObj = req.body;

        Billing.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Billing' });
    }
}



module.exports = {
    create,
    getById,
    get,
    getByPatientId,
    getByDoctor,
    update,
};