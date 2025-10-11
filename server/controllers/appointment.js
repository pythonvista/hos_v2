const Appointment = require("../models/Appointment");
const Patient = require("../models/Patient");
const responseHandler = require("../utils/response-handler");


function getAll(req, res, next) {
    // Get appointments by doctor/patient/hospital
    // Filter from current year onwards
    // startDate format: "2021-01-15T13:30" (ISO string)

    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1); // January 1st of current year
    const startOfYearISO = startOfYear.toISOString(); // Convert to ISO string for comparison

    let query = {
        startDate: { $gte: startOfYearISO } // From January 1st of current year onwards
    };

    // Role-based filtering
    if (req.user.role === 'patient') {
        query.patient = req.user.roleId;
    }
    if (req.user.role === 'doctor') {
        query.doctor = req.user.roleId;
    }
    if (req.user.role === 'hospital') {
        query.hospital = req.user._id;
    }
    if (req.user.role === 'FDO') {
        query.hospital = req.user.hospital;
    }

    console.log('Query:', query); // Debug log
    console.log('Filtering from:', startOfYearISO); // Debug: show the date we're filtering from

    Appointment.find(query)
        .populate({
            path: 'doctor',
            populate: { path: 'user' }
        })
        .populate({
            path: 'patient',
            populate: { path: 'user' }
        })
        .populate({
            path: 'hospital',
            populate: { path: 'user' }
        })
        .exec(function (err, doc) {
            console.log('Found appointments:', doc.length);

            if (err) {
                console.log('Error:', err);
                responseHandler(res, 500, err);
                return;
            }

            responseHandler(res, 200, doc);
        });
}

function get(req, res, next) {


    Appointment.findOne({ _id: req.params.id })
        .populate({
            path: 'doctor',
            populate: { path: 'user' }
        })
        .populate({
            path: 'patient',
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

function del(req, res, next) {
    try {

        Appointment.findOneAndDelete({ _id: req.params.id }, (err, doc) => {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, true);

        })
    } catch (e) {
        responseHandler(res, 500, e.msg);
    }
}

function update(req, res, next) {

    let appointment = {
        patient: req.body.patient,
        doctor: req.body.doctor,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        reason: req.body.reason,
        status: req.body.status,
        createdBy: req.user._id
    };

    Appointment.findOneAndUpdate({ _id: req.params.id }, appointment, (err, doc) => {
        if (err) { responseHandler(res, 500, err); };
        responseHandler(res, 200, doc);

    })

}

async function createAppointment(req, res, next) {
    try {
        let appointment = {
            patient: req.body.patient,
            doctor: req.body.doctor,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            reason: req.body.reason,
            status: req.body.status,
            createdBy: req.user._id,
            hospital: req.user.role === 'hospital' ? req.user._id : req.user.hospital
        };
        let newAppointment = await new Appointment(appointment).save();
        responseHandler(res, 200, newAppointment);
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Appointment Not created' });

    }

}

module.exports = {
    createAppointment,
    get,
    getAll,
    del,
    update
};