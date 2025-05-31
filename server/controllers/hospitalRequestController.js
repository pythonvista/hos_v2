const bcrypt = require("bcryptjs");
const fieldValidation = require("../utils/field-validator");
const HospitalRequest = require("../models/HospitalRequest");
const User = require("../models/User");

const responseHandler = require("../utils/response-handler");

// returns data of single request
function get(req, res, next) {
    HospitalRequest.findOne({ _id: req.params.id }).exec(
        function (err, doc) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, doc);
        })
}

function updateStatus(req, res, next) {
    HospitalRequest.findByIdAndUpdate({ _id: req.params.id }, { status: req.body.status }).exec(
        function (err, doc) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, doc);
        })
}

// returns all requests
function getAll(req, res, next) {
    const options = {
        page: req.body.page,
        limit: req.body.limit,
        sort: { createdAt: -1 },
        sort: { status: 1 }
    };

    console.log('--->', req.body.query);

    let query = {
        isDelete: false
    };
    if (typeof req.body.query.status !== undefined && req.body.query.status && req.body.query.status !== null) {
        query.status = req.body.query.status; // Job status
    }
    console.log('-->', query)
    HospitalRequest.paginate(query, options, function (error, result) {
        if (error) { return res.sendStatus(204); }
        return res.json(result);
    }).catch(next);

}

async function createRequest(req, res, next) {
    console.log(req.body);

    await User.find({ email: req.body.email }, function (err, docs) {
        if (err) {
            responseHandler(res, 500, { msg: 'Server Error' });
        }
        if (docs.length > 0) {
            responseHandler(res, 409, { msg: 'Email Already Exists in System' });
        }
    });

    await HospitalRequest.find({ email: req.body.email }, function (err, docs) {
        if (err) {
            responseHandler(res, 500, { msg: 'Server Error' });
        }
        if (docs.length > 0) {
            responseHandler(res, 409, { msg: 'Email Already Exists in System' });
        }
    });

    var hosRequest = new HospitalRequest();
    hosRequest.name = req.body.name;
    hosRequest.email = req.body.email;
    hosRequest.phone = req.body.phone;
    hosRequest.address = req.body.address;
    hosRequest.city = req.body.city || '';
    hosRequest.state = req.body.state || '';
    hosRequest.staffDetails = req.body.staffDetails || '';
    hosRequest.coverLetter = req.body.coverLetter || '';
    hosRequest.directorName = req.body.directorName || '';
    hosRequest.directorPhone = req.body.directorPhone || '';
    // hosRequest.description = req.body.description;

    hosRequest.save().then(function (result, err) {
        if (err) {
            return res.sendStatus(500);
        }
        responseHandler(res, 200, { msg: 'Request Submitted ' });
    }).catch(next)
}




module.exports = {
    createRequest,
    getAll,
    get,
    updateStatus

};