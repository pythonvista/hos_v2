
const User = require("../models/User");
const LabReport = require("../models/LabReport");
const responseHandler = require("../utils/response-handler");
const Appointment = require("../models/Appointment");
const Disease = require("../models/Disease");
const Billing = require("../models/Billing");

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
    const phamacistsCount = await User.countDocuments({ role: 'labAttendant', hospital: req.user._id });
    const doctorCount = await User.countDocuments({ role: 'doctor', hospital: req.user._id });
    const pharmacistsCount = await User.countDocuments({ role: 'pharmacy', hospital: req.user._id });
    const apppointmentCount = await Appointment.countDocuments({ status: 'scheduled', hospital: req.user._id });
    responseHandler(res, 200, { patient: patientCount, phamacists: phamacistsCount, labAttendant: labAttendantCount, doctor: doctorCount, apppointment: apppointmentCount, pharmacistsCount: pharmacistsCount });

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
  let TODAY = new Date(y, 0);
  let YEAR_BEFORE = new Date(y, 12);

  let hospital;
  if (req.user.role == 'hospital') {
    hospital = req.user._id;
  } else {
    hospital = req.user.hospital;
  }

  const monthStrings = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  Billing.aggregate([
    {
      $match: {
        hospital: hospital,
        $expr: {
          $and: [
            { $gt: ["$date", TODAY] },
            { $lt: ["$date", YEAR_BEFORE] }
          ],
        }
      }
    },
    {
      $group: {
        // Group by both month and year of the sale
        _id: {
          month: { $month: "$date" },
          year: { $year: "$date" },
        },
        total: { $sum: "$totalAmount" }
      }
    }
  ]).exec(function (err, docs) { // The return is an array btw.
    console.log('Biling docs', docs)
    if (err) {
      responseHandler(res, 500, err);
    }
    responseHandler(res, 200, docs)
  });
}

async function patientGraph(req, res) {
  console.log("here");
  let y = new Date().getFullYear();
  // Get the current date
  let currentDate = new Date();

  // Calculate one month before the current date

  let oneMonthBefore = new Date();
  let TODAY = oneMonthBefore.setMonth(currentDate.getMonth() - 1);
  let YEAR_BEFORE = new Date();

  // let TODAY = new Date(y, 0);
  // let YEAR_BEFORE = new Date(y, 1);
  console.log(TODAY, YEAR_BEFORE);

  let hospital;
  if (req.user.role == 'hospital') {
    hospital = req.user._id;
  } else {
    hospital = req.user.hospital;
  }
  console.log(hospital, 202)
  const monthStrings = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const docs = await User.aggregate([
    {
      $match: {
        // Match only users with a specific productId
        role: 'patient',
        hospital: `${hospital}`,
        // Match only salses that fufils the date constraint below
        $expr: {
          $and: [
            { $gt: [{ $toDate: "$createdAt" }, { $toDate: TODAY }] },
            { $lt: [{ $toDate: "$createdAt" }, { $toDate: YEAR_BEFORE }] }
          ]
        }
      }
    },
    {
      $sort: {
        "_id.year": -1,
        "_id.month": -1
      }
    }
    // {
    //   $group: {
    //     // Group by both month and year of the sale
    //     _id: {
    //       month: { $month: "$createdAt" },
    //       year: { $year: "$createdAt" },
    //     },
    //     // Count the no of sales
    //     count: {
    //       $sum: 1
    //     }
    //   }
    // }
    // {
    //   $group: {
    //     _id: {
    //       month: { $dateToString: { format: "%m", date: { $toDate: "$createdAt" } } },
    //       year: { $dateToString: { format: "%Y", date: { $toDate: "$createdAt" } } }
    //     },
    //     count: { $sum: 1 }
    //   }
    // }
  ]).exec();
  // console.log('docs', docs)
  // console.log('err', err)

  responseHandler(res, 200, docs)
}

function appointmentGraph(req, res) {
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
  Appointment.aggregate([
    {
      $match: {
        // Match only users with a specific productId
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
    console.log('docs', docs)
    if (err) {
      responseHandler(res, 500, err);
    }
    responseHandler(res, 200, docs)
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
  billingGraph
};


