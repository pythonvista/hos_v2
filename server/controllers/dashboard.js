
const User = require("../models/User");
const LabReport = require("../models/LabReport");
const responseHandler = require("../utils/response-handler");
const Appointment = require("../models/Appointment");
const Disease = require("../models/Disease");
const Billing = require("../models/Billing");
const Patient = require("../models/Patient");
async function admin(req, res, next) {
    try {
        const patientCount = await User.countDocuments({ role: 'patient' });
        const hospitalCount = await User.countDocuments({ role: 'hospital' });
        const doctorCount = await User.countDocuments({ role: 'doctor' });
        const hospitals = await User.find({ role: 'hospital' }).limit(10);
        responseHandler(res, 200, { patient: patientCount, hospital: hospitalCount, doctor: doctorCount, request: 0, hospitals: hospitals });

    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'Dashboard Data Not Found' });
    }
}
async function hospital(req, res, next) {
    try {
        const patientCount = await User.countDocuments({ role: 'patient', hospital: req.user._id });
        const labAttendantCount = await User.countDocuments({ role: 'labAttendant', hospital: req.user._id });
        const doctorCount = await User.countDocuments({ role: 'doctor', hospital: req.user._id });
        const apppointmentCount = await Appointment.countDocuments({ status: 'scheduled', hospital: req.user._id });
        const pharmacistsCount = await User.countDocuments({ role: 'pharmacy', hospital: req.user._id });
        const patients = await User.find({ role: 'patient', hospital: req.user._id }).limit(10);
        responseHandler(res, 200, { patient: patientCount, labAttendant: labAttendantCount, doctor: doctorCount, apppointment: apppointmentCount, patients: patients, pharmacistsCount: pharmacistsCount  });

    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'Dashboard Data Not Found' });
    }

}
async function doctor(req, res, next) {
    try {
        const ticketCount = await LabReport.countDocuments({ doctor: req.user.roleId });
        const scheduledCount = await Appointment.countDocuments({ status: 'scheduled', doctor: req.user.roleId });
        const intakeCount = await Appointment.countDocuments({ status: 'intake', doctor: req.user.roleId });
        const checkoutCount = await Appointment.countDocuments({ status: 'checkout', doctor: req.user.roleId });

        const apppointments = await Appointment.find({ status: 'scheduled', doctor: req.user.roleId })
            .populate({
                path: 'patient',
                populate: { path: 'user' }
            });

        responseHandler(res, 200, {
            ticket: ticketCount, scheduled: scheduledCount,
            intake: intakeCount, checkout: checkoutCount,
            apppointments: apppointments
        });

    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'Dashboard Data Not Found' });
    }

}
async function patient(req, res, next) {
    try {
        //LabReport
        //appointment
        // visits appoitments that are checkout
        // appointments scheduled
        const labReportCount = await LabReport.countDocuments({ patient: req.user.roleId });
        const appointmentCount = await Appointment.countDocuments({ patient: req.user.roleId, status: { $ne: 'checkout' } });
        const visitCount = await Appointment.countDocuments({ patient: req.user.roleId, status: 'checkout' });

        const appointments = await Appointment.find({ patient: req.user.roleId, status: 'scheduled' }).populate({
            path: 'doctor',
            populate: { path: 'user' }
        });

        responseHandler(res, 200, {
            labReport: labReportCount,
            appointment: appointmentCount, visit: visitCount, appointments: appointments
        });

    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'Dashboard Data Not Found' });
    }

}

async function labAttendant(req, res, next) {
    try {

        const upcomingCount = await LabReport.countDocuments({ status: 'scheduled', hospital: req.user.hospital }); // here mention the category
        const pendingCount = await LabReport.countDocuments({ status: 'pending', hospital: req.user.hospital });
        const completedCount = await LabReport.countDocuments({ status: 'complete', hospital: req.user.hospital });

        const labReports = await LabReport.find({ status: 'scheduled', hospital: req.user.hospital }).limit(10);
        responseHandler(res, 200, { upcoming: upcomingCount, pending: pendingCount, completed: completedCount, labReports: labReports });

    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'Dashboard Data Not Found' });
    }

}


async function fdo(req, res, next) {
    try {
        const patientCount = await User.countDocuments({ role: 'patient', hospital: req.user.hospital });
        const apppointmentCount = await Appointment.countDocuments({ status: 'scheduled', hospital: req.user.hospital });
        const patients = await User.find({ role: 'patient', hospital: req.user.hospital }).limit(10);


        responseHandler(res, 200, { patient: patientCount, apppointment: apppointmentCount, patients: patients });

    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'Dashboard Data Not Found' });
    }

}

async function pharmacy(req, res, next) {
    try {
        const completedPrescrioptionsCount = await Disease.countDocuments({
            isPrescriptionGiven: true, hospital: req.user.hospital, prescription: { $exists: true, $not: { $size: 0 } }
        });
        const unCompletedPrescrioptionsCount = await Disease.countDocuments({
            isPrescriptionGiven: false, hospital: req.user.hospital, prescription: { $exists: true, $not: { $size: 0 } }
        });

        responseHandler(res, 200, {

            completed: completedPrescrioptionsCount, unComplete: unCompletedPrescrioptionsCount
        });

    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'Dashboard Data Not Found' });
    }

}

function billingGraph(req, res) {
    let y = new Date().getFullYear();
    let TODAY = new Date(y, 0, 1); // Start of current year (January 1st)
    let YEAR_END = new Date(y + 1, 0, 1); // Start of next year (January 1st next year)

    let hospital;
    if (req.user.role == 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }

    // Ensure hospital ID is a valid ObjectId
    const mongoose = require('mongoose');
    if (!hospital || !mongoose.Types.ObjectId.isValid(hospital)) {
        console.error("Invalid hospital ID:", hospital);
        return responseHandler(res, 400, { error: "Invalid hospital ID" });
    }

    const monthStrings = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    Billing.aggregate([
        {
            $match: {
                hospital: mongoose.Types.ObjectId(hospital), // Ensure ObjectId type
                createdAt: {
                    $gte: TODAY,     // Greater than or equal to start of year
                    $lt: YEAR_END    // Less than start of next year
                }
            }
        },
        {
            $group: {
                // Group by both month and year of the billing createdAt
                _id: {
                    month: { $month: "$createdAt" },
                    year: { $year: "$createdAt" },
                },
                total: { $sum: "$totalAmount" }
            }
        },
        {
            $sort: { "_id.year": 1, "_id.month": 1 } // Sort by year and month
        },
        {
            $project: {
                month: "$_id.month",
                year: "$_id.year",
                total: 1,
                monthName: { $arrayElemAt: [monthStrings, "$_id.month"] },
                _id: 0
            }
        }
    ]).exec(function (err, docs) {
        console.log('Billing docs', docs);
        if (err) {
            console.error("Billing aggregation error:", err);
            return responseHandler(res, 500, { error: "Server error", details: err.message });
        }
        responseHandler(res, 200, docs);
    });
}



async function newPatient(req, res) {
    try {
        console.log("Fetching new patients data");

        // Set up date range for current year
        const currentYear = new Date().getFullYear();
        const startOfYear = new Date(currentYear, 0, 1); // January 1st of current year
        const endOfYear = new Date(currentYear, 11, 31, 23, 59, 59); // December 31st of current year

        console.log('Date range:', startOfYear, 'to', endOfYear);

        // Determine hospital ID based on user role
        let hospitalId;
        if (req.user.role === 'hospital') {
            hospitalId = req.user._id;
        } else {
            hospitalId = req.user.hospital;
        }

        if (!hospitalId) {
            return responseHandler(res, 400, { message: 'Hospital ID not found' });
        }

        // Convert hospitalId to ObjectId if it's a string
        const ObjectId = require('mongoose').Types.ObjectId;
        const hospitalObjectId = typeof hospitalId === 'string' ? new ObjectId(hospitalId) : hospitalId;

        // Month names for reference
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // Get total count of new patients for the year (for monthly breakdown)
        const totalCountPipeline = [
            {
                $match: {
                    role: 'patient',
                    hospital: hospitalObjectId,
                    createdAt: {
                        $gte: startOfYear,
                        $lte: endOfYear
                    }
                }
            },
            {
                $group: {
                    _id: {
                        month: { $month: "$createdAt" },
                        year: { $year: "$createdAt" }
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1
                }
            }
        ];

        // Execute aggregation for monthly breakdown
        const monthlyResults = await User.aggregate(totalCountPipeline);

        // Create a complete month-by-month breakdown (including months with 0 patients)
        const completeResults = [];
        for (let month = 1; month <= 12; month++) {
            const monthData = monthlyResults.find(r => r._id.month === month);
            completeResults.push({
                month,
                monthName: monthNames[month - 1],
                year: currentYear,
                count: monthData ? monthData.count : 0
            });
        }

        // Calculate total new patients for the year
        const totalNewPatients = monthlyResults.reduce((sum, month) => sum + month.count, 0);

        // Get ONLY 15 most recent new patients with their details
        const newUsers = await User.find({
            role: 'patient',
            hospital: hospitalObjectId,
            createdAt: {
                $gte: startOfYear,
                $lte: endOfYear
            }
        })
            .select('_id name email phone state username createdAt')
            .sort({ createdAt: -1 }) // Most recent first
            .limit(15) // Strictly limit to 15 patients
            .lean();

        console.log(`Found ${newUsers.length} users for patient details`);

        // Get user IDs to find corresponding patient records
        const userIds = newUsers.map(user => user._id);

        // Find corresponding patient records (only for the 15 users we found)
        const patientRecords = await Patient.find({ user: { $in: userIds } })
            .select('_id user gender occupation maritalStatus tribe religion dob')
            .lean();

        console.log(`Found ${patientRecords.length} patient records`);

        // Transform data to include both patient ID and user data
        const transformedPatients = newUsers.map(user => {
            const patientData = patientRecords.find(p => p.user.toString() === user._id.toString());
            return {
                userId: user._id,
                patientId: patientData?._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                username: user.username,
                state: user.state,
                gender: patientData?.gender,
                occupation: patientData?.occupation,
                maritalStatus: patientData?.maritalStatus,
                tribe: patientData?.tribe,
                religion: patientData?.religion,
                dob: patientData?.dob,
                createdAt: user.createdAt
            };
        });

        // Prepare response data
        const responseData = {
            year: currentYear,
            totalNewPatients, // This is the total count for the year
            newPatients: transformedPatients, // This is limited to 15 patients
            newPatientsCount: transformedPatients.length, // Actual count of returned patients
            monthlyBreakdown: completeResults,
            hospitalId: hospitalId.toString()
        };

        console.log(`Total new patients for ${currentYear}: ${totalNewPatients}`);
        console.log(`Returning ${transformedPatients.length} patient details`);

        return responseHandler(res, 200, responseData);

    } catch (error) {
        console.error('Error fetching new patients data:', error);
        return responseHandler(res, 500, {
            message: 'Failed to fetch new patients data',
            error: error.message
        });
    }
}

// Alternative function to get new patients for a specific time period
async function newPatientsByDateRange(req, res) {
    try {
        const { startDate, endDate } = req.query;

        // Default to current year if no dates provided
        const currentYear = new Date().getFullYear();
        const start = startDate ? new Date(startDate) : new Date(currentYear, 0, 1);
        const end = endDate ? new Date(endDate) : new Date(currentYear, 11, 31, 23, 59, 59);

        // Determine hospital ID
        let hospitalId;
        if (req.user.role === 'hospital') {
            hospitalId = req.user._id;
        } else {
            hospitalId = req.user.hospital;
        }

        const ObjectId = require('mongoose').Types.ObjectId;
        const hospitalObjectId = typeof hospitalId === 'string' ? new ObjectId(hospitalId) : hospitalId;

        const results = await User.aggregate([
            {
                $match: {
                    role: 'patient',
                    hospital: hospitalObjectId,
                    createdAt: {
                        $gte: start,
                        $lte: end
                    }
                }
            },
            {
                $group: {
                    _id: {
                        day: { $dayOfMonth: "$createdAt" },
                        month: { $month: "$createdAt" },
                        year: { $year: "$createdAt" }
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: {
                    "_id.year": 1,
                    "_id.month": 1,
                    "_id.day": 1
                }
            }
        ]);

        const totalCount = results.reduce((sum, day) => sum + day.count, 0);

        return responseHandler(res, 200, {
            dateRange: { start, end },
            totalNewPatients: totalCount,
            dailyBreakdown: results,
            hospitalId: hospitalId.toString()
        });

    } catch (error) {
        console.error('Error fetching new patients by date range:', error);
        return responseHandler(res, 500, {
            message: 'Failed to fetch new patients data',
            error: error.message
        });
    }
}

function patientGraph(req, res) {
    console.log("here");
    let y = new Date().getFullYear();
    let TODAY = new Date(y, 0);
    let YEAR_BEFORE = new Date(y, 12);
    console.log(TODAY, YEAR_BEFORE);

    let hospital;
    if (req.user.role == 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }

    const monthStrings = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    User.aggregate([
        {
            $match: {
                // Match only users with a specific productId
                role: 'patient',
                hospital: hospital,
                // Match only salses that fufils the date constraint below
                $expr: {
                    $and: [
                        { $gt: ["$createdAt", TODAY] },
                        { $lt: ["$createdAt", YEAR_BEFORE] }
                    ],
                }
            }
        },
        {
            $group: {
                // Group by both month and year of the sale
                _id: {
                    month: { $month: "$createdAt" },
                    year: { $year: "$createdAt" },
                },
                // Count the no of sales
                count: {
                    $sum: 1
                }
            }
        }
    ]).exec(function (err, docs) { // The return is an array btw.
        // console.log('docs', docs)
        if (err) {
            responseHandler(res, 500, err);
        }
        responseHandler(res, 200, docs)
    });

}

function appointmentGraph(req, res) {
    console.log("Starting appointmentGraph");

    // Set date range for the current year
    const currentYear = new Date().getFullYear();
    const startOfYear = new Date(currentYear, 0, 1); // January 1st of the current year
    const startOfYearISO = startOfYear.toISOString(); // Convert to ISO string for comparison
    const nextYear = new Date(currentYear + 1, 0, 1); // January 1st of the next year
    const nextYearISO = nextYear.toISOString(); // Convert to ISO string for comparison

    console.log("Date range (ISO):", startOfYearISO, nextYearISO);

    // Determine hospital ID based on user role
    let hospital;
    if (req.user.role === 'hospital') {
        hospital = req.user._id;
    } else {
        hospital = req.user.hospital;
    }

    // Ensure hospital ID is a valid ObjectId
    if (!hospital || !require('mongoose').Types.ObjectId.isValid(hospital)) {
        console.error("Invalid hospital ID:", hospital);
        return responseHandler(res, 400, { error: "Invalid hospital ID" });
    }

    const monthStrings = [
        "", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    Appointment.aggregate([
        {
            $match: {
                hospital: require('mongoose').Types.ObjectId(hospital), // Ensure hospital is an ObjectId
                startDate: {
                    $gte: startOfYearISO, // Greater than or equal to Jan 1 of current year (ISO string)
                    $lt: nextYearISO // Less than Jan 1 of next year (ISO string)
                }
            }
        },
        {
            $addFields: {
                // Convert ISO string to date for aggregation operations
                startDateObj: {
                    $dateFromString: {
                        dateString: "$startDate",
                        onError: null // Handle invalid date strings gracefully
                    }
                }
            }
        },
        {
            $match: {
                startDateObj: { $ne: null } // Filter out documents where date conversion failed
            }
        },
        {
            $group: {
                _id: {
                    month: { $month: "$startDateObj" },
                    year: { $year: "$startDateObj" }
                },
                count: { $sum: 1 }
            }
        },
        {
            $sort: { "_id.year": 1, "_id.month": 1 } // Sort by year and month for consistency
        },
        {
            $project: {
                month: "$_id.month",
                year: "$_id.year",
                count: 1,
                monthName: { $arrayElemAt: [monthStrings, "$_id.month"] },
                _id: 0
            }
        }
    ]).exec((err, docs) => {
        console.log("Appointment docs:", docs);
        if (err) {
            console.error("Aggregation error:", err);
            return responseHandler(res, 500, { error: "Server error", details: err.message });
        }
        if (!docs.length) {
            console.log("No appointments found for hospital:", hospital, "from", startOfYearISO);
        }
        responseHandler(res, 200, docs);
    });
}
function adminPatientGraph(req, res) {
    let y = new Date().getFullYear();
    let TODAY = new Date(y, 0);
    let YEAR_BEFORE = new Date(y, 12);

    const monthStrings = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    User.aggregate([
        {
            $match: {
                role: 'patient',
                $expr: {
                    $and: [
                        { $gt: ["$createdAt", TODAY] },
                        { $lt: ["$createdAt", YEAR_BEFORE] }
                    ],
                }
            }
        },
        {
            $group: {
                _id: {
                    month: { $month: "$createdAt" },
                    year: { $year: "$createdAt" },
                },
                count: {
                    $sum: 1
                }
            }
        }
    ]).exec(function (err, docs) { // The return is an array btw.
        console.log('Admin Patient docs', docs)
        if (err) {
            responseHandler(res, 500, err);
        }
        responseHandler(res, 200, docs)
    });
}

function adminDoctorGraph(req, res) {
    let y = new Date().getFullYear();
    let TODAY = new Date(y, 0);
    let YEAR_BEFORE = new Date(y, 12);

    const monthStrings = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    User.aggregate([
        {
            $match: {
                role: 'doctor',
                $expr: {
                    $and: [
                        { $gt: ["$createdAt", TODAY] },
                        { $lt: ["$createdAt", YEAR_BEFORE] }
                    ],
                }
            }
        },
        {
            $group: {
                _id: {
                    month: { $month: "$createdAt" },
                    year: { $year: "$createdAt" },
                },
                count: {
                    $sum: 1
                }
            }
        }
    ]).exec(function (err, docs) { // The return is an array btw.
        console.log('Admin Doctor docs', docs)
        if (err) {
            responseHandler(res, 500, err);
        }
        responseHandler(res, 200, docs)
    });
}

function adminHospitalGraph(req, res) {
    // console.log("here");
    let y = new Date().getFullYear();
    let TODAY = new Date(y, 0);
    let YEAR_BEFORE = new Date(y, 12);
    // console.log(TODAY, YEAR_BEFORE);

    const monthStrings = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    User.aggregate([
        {
            $match: {
                role: 'hospital',
                $expr: {
                    $and: [
                        { $gt: ["$createdAt", TODAY] },
                        { $lt: ["$createdAt", YEAR_BEFORE] }
                    ],
                }
            }
        },
        {
            $group: {
                _id: {
                    month: { $month: "$createdAt" },
                    year: { $year: "$createdAt" },
                },
                count: {
                    $sum: 1
                }
            }
        }
    ]).exec(function (err, docs) { // The return is an array btw.
        console.log('Hospital docs', docs)
        if (err) {
            responseHandler(res, 500, err);
        }
        responseHandler(res, 200, docs)
    });

}


module.exports = {
    admin,
    hospital,
    patient,
    doctor,
    labAttendant,
    fdo,
    pharmacy,
    patientGraph,
    appointmentGraph,
    adminPatientGraph,
    adminDoctorGraph,
    adminHospitalGraph,
    billingGraph,
    newPatient,
    newPatientsByDateRange
};


