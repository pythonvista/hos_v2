const bcrypt = require("bcryptjs");
const Appointment = require('../models/Appointment')
const fieldValidation = require("../utils/field-validator");
const Patient = require("../models/Patient");
const Disease = require("../models/Disease");
const User = require("../models/User");

const deleter = require("../utils/deleter");
const util = require("util");
const responseHandler = require("../utils/response-handler");
const userController = require('./usersController');

async function getAll(req, res, next) {
    var pageOptions = {
        page: +req.query.page || 0,
        limit: +req.query.limit || 10
    }

    if (pageOptions.page > 0) {
        pageOptions.page -= 1;
    }

    // console.log(req.user);
    query = {
        "user.hospital": req.user.role === 'hospital' ? req.user._id : req.user.hospital
    };
    console.log('query', query)
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
    let c = await User.count({ role: 'patient', hospital: query["user.hospital"] });
    Patient.aggregate(aggregationStages)
        .exec(function (err, docs) { // The return is an array btw.
            // console.log('docs', docs)
            if (err) {
                responseHandler(res, 500, err);
            }
            responseHandler(res, 200, { docs, c })
        });
}

function get(req, res, next) {

    Patient.findOne({
        $or: [{ _id: req.params.id },
        { user: req.params.id }]
    }).populate('user')
        .exec(
            function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };
                console.log(doc);
                responseHandler(res, 200, doc);

            })
}

async function updatePatient(req, res, next) {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        await Patient.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Patient' });
    }

}
const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escapes special regex characters
};

async function search(req, res, next) {
    console.log('search query', req.query);

    // Validate user object
    if (!req.user || (!req.user._id && !req.user.hospital)) {
        return responseHandler(res, 401, { message: 'Unauthorized: User data missing' });
    }

    // Get query parameters
    const query = req.query.searchQuery || '';
    const limit = parseInt(req.query.limit, 20) || 20; // Default limit to 10
    if (isNaN(limit) || limit <= 0) {
        return responseHandler(res, 400, { message: 'Invalid limit parameter' });
    }

    // Determine hospital ID based on user role
    let hospital;
    if (req.user.role === 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }

    // Ensure hospital ID is valid
    if (!hospital) {
        return responseHandler(res, 400, { message: 'Hospital ID not found' });
    }

    // Escape query to prevent regex injection
    const escapedQuery = escapeRegExp(query);
    console.log('escapedQuery', escapedQuery, 'searching in hospital', hospital);

    try {
        // Method 1: Using aggregation pipeline (Recommended)
        const results = await Patient.aggregate([
            {
                $lookup: {
                    from: 'users', // Make sure this matches your User collection name
                    localField: 'user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: '$user'
            },
            {
                $match: {
                    'user.hospital': hospital,
                    $or: [
                        { 'user.username': { $regex: `.*${escapedQuery}.*`, $options: 'i' } },
                        { 'user.name': { $regex: `.*${escapedQuery}.*`, $options: 'i' } }
                    ]
                }
            },
            {
                $sort: { 'user.name': 1 }
            },
            {
                $limit: limit
            }
        ]);

        console.log('search results', results.length, 'found');
        responseHandler(res, 200, results);

    } catch (err) {
        console.error('Search error:', err);
        return responseHandler(res, 500, { message: 'Internal server error' });
    }
}

// Alternative Method 2: Two-step query approach
async function searchAlternative(req, res, next) {
    console.log('search query', req.query);

    // Validate user object
    if (!req.user || (!req.user._id && !req.user.hospital)) {
        return responseHandler(res, 401, { message: 'Unauthorized: User data missing' });
    }

    // Get query parameters
    const query = req.query.searchQuery || '';
    const limit = parseInt(req.query.limit, 10) || 10;
    if (isNaN(limit) || limit <= 0) {
        return responseHandler(res, 400, { message: 'Invalid limit parameter' });
    }

    // Determine hospital ID based on user role
    let hospital;
    if (req.user.role === 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }

    if (!hospital) {
        return responseHandler(res, 400, { message: 'Hospital ID not found' });
    }

    const escapedQuery = escapeRegExp(query);
    console.log('escapedQuery', escapedQuery, 'searching in hospital', hospital);

    try {
        // First, find users that match the search criteria and belong to the hospital
        const matchingUsers = await User.find({
            hospital: hospital,
            $or: [
                { username: { $regex: `.*${escapedQuery}.*`, $options: 'i' } },
                { name: { $regex: `.*${escapedQuery}.*`, $options: 'i' } }
            ]
        }).select('_id').lean();

        if (matchingUsers.length === 0) {
            return responseHandler(res, 200, []);
        }

        const userIds = matchingUsers.map(user => user._id);

        // Then find patients with those user IDs
        const results = await Patient.find({
            user: { $in: userIds }
        })
            .populate('user')
            .sort({ 'user.name': 1 })
            .limit(limit);

        console.log('search results', results.length, 'found');
        responseHandler(res, 200, results);

    } catch (err) {
        console.error('Search error:', err);
        return responseHandler(res, 500, { message: 'Internal server error' });
    }
}

async function createPatient(req, res, next) {
    try {
        if (!fieldValidation(req, res)) return;
        let newuser = await userController.createUser(req);
        newuser.approved = true;
        newuser.save();
        if (newuser) {
            let patient = {
                user: newuser._id,
                occupation: req.body.occupation,
                gender: req.body.gender,
                description: req.body.description,
                maritalStatus: req.body.maritalStatus,
                tribe: req.body.tribe,
                religion: req.body.religion,
                dob: new Date(req.body.dob),
                createdBy: req.user._id,
                vitals: []
            };
            let newpatient = await new Patient(patient).save();
            let obj = Object.assign({}, newuser._pat, newpatient._pat);

            responseHandler(res, 200, { obj, _id: newpatient._id });
        }
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Patient Not created' });

    }

}

async function checkIn(req, res, next) {

    const patientId = req.params.patientId;
    const appointmentId = req.params.appointmentId;
    try {

        let patient = await Patient.findOneAndUpdate({ _id: patientId }, { new: true });
        patient.vitals = req.body.vitals;
        patient.vitalsUpdatedAt = Date.now();
        patient.save();
        try {
            let appointment = await Appointment.findOneAndUpdate({ _id: appointmentId }, { $set: { status: 'intake' } }, { new: true })
        } catch (error) {
            console.log('error in appointment update')
            responseHandler(res, 500, { msg: 'Error While updatingAppointment' })
        }
        responseHandler(res, 200, { msg: 'Updated Successfully' })
    } catch (err) {
        console.log('error in vitals update')
        responseHandler(res, 500, { msg: 'Error While updating vitals ' })
    }

}

// adds Medical History Follow Up
async function addFollowUP(req, res, next) {
    try {
        // if (!fieldValidation(req, res)) return;
        // console.log("===============>", req.body);
        let disease = {
            createdBy: req.user._id,
            patient: req.body.patient,
            hospital: req.user.role === 'hospital' ? req.user._id : req.user.hospital,
            presentingComplaint: req.body.presentingComplaint,
            historyOfPresentingComplaint: req.body.historyOfPresentingComplaint,
            physicalExamination: req.body.physicalExamination,
            provisionalDiagnosis: req.body.provisionalDiagnosis,
            investigations: req.body.investigations,
            finalDiagnosis: req.body.finalDiagnosis,
            treatment: req.body.treatment,
            outcome: req.body.outcome,
            diseaseCategory: req.body.diseaseCategory,
            diseaseSubCategory: req.body.diseaseSubCategory,

        };
        if (req.body.prescription.length !== 0) {
            disease.prescription = req.body.prescription
        }
        let newdisease = await new Disease(disease).save();

        responseHandler(res, 200, newdisease);
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Patient Not created' });
    }
}

// returns follow up of specific patient
async function getFollowUps(req, res, next) {
    let query = {};
    query.patient = req.params.pid;
    // console.log('body', req.body);

    if (typeof req.body.diseaseCategory !== undefined && req.body.diseaseCategory && req.body.diseaseCategory !== null) query.diseaseCategory = { $in: req.body.diseaseCategory }; // diseaseCategory
    if (typeof req.body.diseaseSubCategory !== undefined && req.body.diseaseSubCategory && req.body.diseaseSubCategory !== null) query.diseaseSubCategory = { $in: req.body.diseaseSubCategory }; // diseaseSubCategory

    // console.log('query-->', query);
    var pageOptions = {
        page: +req.query.page || 0,
        limit: +req.query.limit || 10
    }

    const count = await Disease.countDocuments(query);

    try {
        // console.log(req.params.pid);
        await Disease.find(query)
            .sort({ createdAt: -1 })
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
            .exec(function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };
                responseHandler(res, 200, { doc, count: count });
            })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error getting Followups' });
    }
}
async function updateFollowUp(req, res, next) {
    try {
        const id = req.params.fId;
        const updateObj = req.body;
        await Disease.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Followup' });
    }
}
async function deleteFollowUp(req, res, next) {
    try {
        const id = req.params.fId;
        await Disease.findByIdAndDelete({ _id: id }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, { msg: 'FollowUp Deleted' });
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Patient Not created' });
    }
}

// deletes on basis of disease category
async function deleteFollowUps(req, res, next) {
    let query = {};
    // console.log('body', req.body);
    if (typeof req.body.diseaseCategory !== undefined && req.body.diseaseCategory && req.body.diseaseCategory !== null) query.diseaseCategory = { $in: req.body.diseaseCategory }; // diseaseCategory
    if (typeof req.body.diseaseSubCategory !== undefined && req.body.diseaseSubCategory && req.body.diseaseSubCategory !== null) query.diseaseSubCategory = { $in: req.body.diseaseSubCategory.disease }; // diseaseSubCategory

    // console.log('Query---->', query);
    try {
        await Disease.deleteMany(query, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, { msg: 'FollowUp Deleted' });
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Follow Up Not Deleted' });
    }
}

async function getSingleFollowup(req, res, next) {

    Disease.find({ _id: req.params.fId })
        .populate({
            path: 'createdBy',
            populate: { path: 'user' }
        })
        .populate({
            path: 'hospital',
            populate: { path: 'user' }
        })
        .exec(
            function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };
                responseHandler(res, 200, doc);

            })
}

async function updatePatientFixedDisease(req, res, next) {
    console.log('i am here', req.body);
    try {
        let updateObj = {};
        const id = req.params.id;
        let diseaseType = req.body.diseaseType;
        if (diseaseType === 'problems_PastMedicalHistory') {
            updateObj.problems_PastMedicalHistory = req.body.value;
        } else if (diseaseType === 'drugHistory') {
            updateObj.drugHistory = req.body.value;
        } else if (diseaseType === 'surgicalHistory') {
            updateObj.surgicalHistory = req.body.value;
        } else if (diseaseType === 'obstetrics_GynacologyHistory') {
            updateObj.obstetrics_GynacologyHistory = req.body.value;
        } else if (diseaseType === 'vaccines') {
            updateObj.vaccines = req.body.value;
        } else if (diseaseType === 'allergies') {
            updateObj.allergies = req.body.value;
        }

        await Patient.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Patient' });
    }

}


module.exports = {
    createPatient,
    updatePatient,
    get,
    getAll,
    search,
    checkIn,
    addFollowUP,
    getFollowUps,
    updateFollowUp,
    deleteFollowUp,
    deleteFollowUps,
    getSingleFollowup,
    updatePatientFixedDisease
};