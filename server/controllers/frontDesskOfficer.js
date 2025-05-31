const fieldValidation = require("../utils/field-validator");
const FrontDeskOfficer = require("../models/FrontDeskOfficer");
const User = require("../models/User");
const responseHandler = require("../utils/response-handler");
const userController = require('./usersController');

async function get(req, res) {
    var pageOptions = {
        page: +req.query.page || 0,
        limit: +req.query.limit || 10
    }

    if (pageOptions.page > 0) {
        pageOptions.page -= 1;
    }

    query = {
        "user.hospital": req.user._id
    };
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
    let c = await User.count({ role: 'FDO', hospital: query["user.hospital"] });
    FrontDeskOfficer.aggregate(aggregationStages)
        .exec(function (err, docs) { // The return is an array btw.
            if (err) {
                responseHandler(res, 500, err);
            }
            responseHandler(res, 200, { docs, c })
        });
}

function getById(req, res) {
    FrontDeskOfficer.findOne({ _id: req.params.id }).populate('user')
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
            let frontDeskOfficer = {
                user: newuser._id,
                description: req.body.description,
                gender: req.body.gender,
                dob: new Date(req.body.dob),
                createdBy: req.user._id
            };
            let newfrontDeskOfficer = await new FrontDeskOfficer(frontDeskOfficer).save();
            let obj = Object.assign({}, newuser._doc, newfrontDeskOfficer._doc);

            responseHandler(res, 200, obj);
        }
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Front Desk Officer Not created' });
    }
}

function update(req, res) {
    try {
        const id = req.params.id;
        const updateObj = req.body;
        FrontDeskOfficer.findByIdAndUpdate({ _id: id }, updateObj, { new: true }, (error, document) => {
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

function delet() {

}

function search(req, res) {
    let query = req.query.searchQuery;
    FrontDeskOfficer.find()
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

async function getFdoList(req, res) {
    let hospital;

    if (req.user.role == 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }
    FrontDeskOfficer.find().populate('user', 'name _id', { hospital: hospital }).exec(function (err, docs) {
        if (err) {
            responseHandler(res, 500, err);
        }
        docs = docs.filter(d => d.user !== null);
        // console.log("===>", docs);
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
    getFdoList
};