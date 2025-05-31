const fieldValidation = require("../utils/field-validator");
const Pharmacy = require("../models/Pharmacy");
const Disease = require("../models/Disease");
const User = require("../models/User");
const responseHandler = require("../utils/response-handler");
const userController = require('./usersController');
const { populate } = require("../models/Pharmacy");

async function get(req, res) {
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
    let c = await User.count({ role: 'pharmacy', hospital: query["user.hospital"] });
    Pharmacy.aggregate(aggregationStages)
        .exec(function (err, docs) { // The return is an array btw.
            if (err) {
                responseHandler(res, 500, err);
            }
            responseHandler(res, 200, { docs, c })
        });
}

function getById(req, res) {
    Pharmacy.findOne({ _id: req.params.id }).populate('user')
        .exec(
            function (err, doc) {
                if (err) { responseHandler(res, 500, err); return; };
                responseHandler(res, 200, doc);
            })
}

async function create(req, res) {
    try {
        if (!fieldValidation(req, res)) return;
        let newuser = await userController.createUser(req);
        newuser.approved = true;
        newuser.save();
        if (newuser) {
            let pharmacy = {
                user: newuser._id,
                description: req.body.description,
                createdBy: req.user._id
            };
            let newPharmacy = await new Pharmacy(pharmacy).save();
            let obj = Object.assign({}, newuser._doc, newPharmacy._doc);

            responseHandler(res, 200, obj);
        }
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Pharmacy Not created' });
    }
}

function update(req, res) {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        console.log('Pharmacy--->', updateObj);
        Pharmacy.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Pharmacy' });
    }
}

function delet() {

}

function search(req, res) {
    let query = req.query.searchQuery;
    Pharmacy.find()
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

async function getPrescriptions(req, res) {
    var options = {
        select: 'prescription createdAt',
        page: +req.query.page || 1,
        limit: +req.query.limit || 10,
        populate: 'patient createdBy',
        sort: { createdAt: -1 }
    }
    // console.log("==>", req.query.date, typeof req.query.date)
    let query = {
        hospital: req.user.hospital,
        prescription: { $exists: true, $not: { $size: 0 } },
    };
    if (typeof req.query.date !== undefined && req.query.date !== "null" && req.query.date !== "") {
        query.date = { $gte: new Date(req.query.date).setHours(00, 00, 00), $lt: new Date(req.query.date).setHours(23, 59, 59) };
    }

    // console.log("==>", req.query)


    Disease.paginate(query, options, function (error, result) {
        if (error) { return res.sendStatus(204); }
        return res.json(result);
    })
}

function getPrescription(req, res) {
    var options = {
        select: 'prescription createdAt isPrescriptionGiven',
        populate: 'patient createdBy hospital'
    }

    let query = {
        _id: req.params.id
    };

    Disease.paginate(query, options, function (error, result) {
        if (error) { return res.sendStatus(204); }
        responseHandler(res, 200, result);
    })
}

async function getPharmacyList(req, res) {
    let hospital;

    if (req.user.role == 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }
    Pharmacy.find().populate('user', 'name _id hospital', { hospital: hospital }).exec(function (err, docs) {
        if (err) {
            responseHandler(res, 500, err);
        }
        docs = docs.filter(d => d.user !== null);

        responseHandler(res, 200, docs)
    });
}

// marks prescription as given to aptient
async function prescriptionMarkedGiven(req, res) {
    try {
        Disease.findByIdAndUpdate({ _id: req.params.id }, { isPrescriptionGiven: true }, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Disease Prescription' });
    }
}


module.exports = {
    create,
    getById,
    get,
    update,
    delet,
    search,
    getPrescriptions,
    getPrescription,
    getPharmacyList,
    prescriptionMarkedGiven
};