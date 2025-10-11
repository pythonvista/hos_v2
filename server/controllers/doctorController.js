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
    const limit = parseInt(req.query.limit, 10) || 10; // Default limit to 10
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
        const results = await Doctor.aggregate([
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

        // Then find doctors with those user IDs
        const results = await Doctor.find({
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

// Method 3: If you want to include doctor-specific fields in search
async function searchWithDoctorFields(req, res, next) {
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
        // Using aggregation to search both user fields and doctor-specific fields
        const results = await Doctor.aggregate([
            {
                $lookup: {
                    from: 'users',
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
                        { 'user.name': { $regex: `.*${escapedQuery}.*`, $options: 'i' } },
                        // Add doctor-specific fields if they exist
                        { 'specialization': { $regex: `.*${escapedQuery}.*`, $options: 'i' } },
                        { 'department': { $regex: `.*${escapedQuery}.*`, $options: 'i' } },
                        // Add more doctor fields as needed
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