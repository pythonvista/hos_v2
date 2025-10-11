const axios = require('axios');
const bcrypt = require("bcryptjs");
const fieldValidation = require("../utils/field-validator");
const User = require("../models/User");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const LabAttendant = require("../models/LabAttendant");
const deleter = require("../utils/deleter");
const util = require("util");
const config = require('../config');
var async = require('async');
const responseHandler = require('../utils/response-handler');
global.crypto = require('crypto')
const apiBaseUrl = config.API_BASE_URL



async function createSub(req, res, next) {
    try {
        let patientId = req.params.id;
        if (!patientId) {
            return responseHandler(res, 400, "Bad Request: Patient ID is required");
        }

        let patient = await Patient.findOne({ _id: patientId })

        if (!patient) {
            return responseHandler(res, 404, "Patient not found");
        }
        let user = await User.findOne({ _id: patient.user })
        console.log('User found:', patient.user, user, patient);
        if (!user) {
            return responseHandler(res, 404, "User not found");
        }
        let nameList = user.name.split(" ");
        const response = await axios.post(`${apiBaseUrl}/emr/patient_subcription?patientId=${patientId}`,
            {
                "email": user.email,
                "password": user.password,
                "firstName": nameList[0] || "N/A",
                "lastName": nameList[1] || "N/A",
                "phoneNumber": "N/A",
                "userType": "emr",
                "hospitalId": user.hospital || 'N/A'
            }
            , {
                headers: {
                    Authorization: process.env.MEDFEST_API_TOKEN || 'jhfkshfhfk', // Replace with proper token from environment
                },
            });
        const axiosData = response.data;
        console.log('Response from API:', axiosData);
        // Check subscription status
        if (axiosData.status) {
            return responseHandler(res, 200, axiosData); // Proceed to next middleware/route handler
        } else {
            return responseHandler(res, 500, "Cant create subscription for this patient", axiosData );
        }
    } catch (err) {
        // console.error('Error in createSub:', err);
        return responseHandler(res, 500, "Internal Server Error");
    }

}




module.exports = {
    createSub
};