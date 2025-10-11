
const responseHandler = require("../utils/response-handler");
const axios = require('axios');
const { console } = require('inspector');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const verify = promisify(jwt.verify);
const config = require('../config');
const apiBaseUrl = config.API_BASE_URL
exports.subAppointmentStatus = async (req, res, next) => {
    try {

        if (req.user.role === 'patient') {
            console.log('User role 2:', req.user);
            let patientId = req.user.hospital
            console.log(patientId)
            // Validate patientId
            if (!patientId) {
                console.log('No patientId provided');
                const error = new Error('Bad Request: Patient ID is required');
                error.statusCode = 400;
                return next(error);
            }

            let patient = await Patient.findOne({ _id: patientId })

            if (!patient) {
                return responseHandler(res, 404, "Patient not found");
            }
            let user = await User.findOne({ _id: patient.user })
            if (!user) {
                return responseHandler(res, 404, "User not found");
            }

            let userHospital = user.hospital || 'N/A';
            console.log('User hospital:', userHospital);
            if (userHospital == '60085868b36bee05b0a3e416') {
                next()
                return
            }


            // Make API call to check patient subscription status
            const response = await axios.get(`${apiBaseUrl}/emr/patient_status?patientId=${patientId}`, {
                headers: {
                    Authorization: process.env.MEDFEST_API_TOKEN || 'jhfkshfhfk', // Replace with proper token from environment
                },
            });

            const axiosData = response.data;
            // Check subscription status
            if (axiosData.status) {
                return next(); // Proceed to next middleware/route handler
            } else {
                return res.json({
                    status: 403,
                    data: {
                        status: 403,
                        error: 'Forbidden',
                        message: 'Access to patient information is restricted. The patient is not subscribed.',
                    },
                });
            }
        } else {
            next()
            return

        }

    } catch (err) {
        console.error('Error in subStatus middleware:', err);
        const error = new Error('Internal Server Error');
        error.statusCode = err.statusCode || 500;
        return next(error);
    }
};