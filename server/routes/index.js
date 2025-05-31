var controllers = require("./../controllers");
const resp = require("../utils/response-handler");
const multy = require("../custom-middlewares/multy");
const patientDocMulter = require('../custom-middlewares/patientDocMulter')

const passport = require('passport');
const passportSignIn = passport.authenticate('local', { session: false });
const passportJWT = passport.authenticate('jwt', { session: false });
module.exports = function (app) {


    app.use(passport.initialize());
    require('../custom-middlewares/passport');

    app.get(`/api/getAdmin`, controllers.users.getAdminID);

    // password Reset and forgot password
    app.post(`/api/forgot`, controllers.users.forgotPassword);
    app.post(`/api/reset`, controllers.users.resetPassword);
    // Email Verification
    app.post(`/api/verifyEmail`, controllers.users.verifyEmail);
    app.post(`/api/sendVerificationEmail`, controllers.users.sendVerificationEmail);

    // Hospital Request
    app.post(`/api/hosRequest/`, controllers.hospitalRequest.createRequest);
    app.post(`/api/hosRequest/getAll`, passportJWT, controllers.hospitalRequest.getAll);
    app.get(`/api/hosRequest/:id`, passportJWT, controllers.hospitalRequest.get);
    app.put(`/api/hosRequest/updateStatus/:id`, passportJWT, controllers.hospitalRequest.updateStatus);


    // Graphs
    // admin panel graph data api's
    app.get(`/api/graph/adminHopitalGraphData`, passportJWT, controllers.dashboard.adminHospitalGraph);
    app.get(`/api/graph/adminPatientGraphData`, passportJWT, controllers.dashboard.adminPatientGraph);
    app.get(`/api/graph/adminDoctorGraphData`, passportJWT, controllers.dashboard.adminDoctorGraph);

    // HOS panel graph data
    app.get(`/api/graph/appointmentGraphData`, passportJWT, controllers.dashboard.appointmentGraph);
    app.get(`/api/graph/patientGraphData`, passportJWT, controllers.dashboard.patientGraph);
    app.get(`/api/graph/paymentsGraphData`, passportJWT, controllers.dashboard.billingGraph);



    //Notifications
    app.get('/api/getNotifications/:id', passportJWT, controllers.notifications.getNotificationsByUserID);
    app.put('/api/readNotification/:id', passportJWT, controllers.notifications.updateNotificationStatusRead);
    app.post('/api/createNotification', passportJWT, controllers.notifications.create);
    app.delete('/api/deleteNotification/:id', passportJWT, controllers.notifications.deleteNotification);

    // User
    app.get('/api/toggleDelete/:id', passportJWT, controllers.users.toggleDelete);
    app.post("/api/createUser", multy.single("image"), controllers.users.signup);
    app.put('/api/updateUser/:id', multy.single("image"), controllers.users.updateUser);
    app.put('/api/patient/:patientId/appointment/:appointmentId/checkIn', controllers.patients.checkIn);
    app.get("/api/search", passportJWT, controllers.users.search);
    app.get("/api/toggleActive/:id", passportJWT, controllers.users.toggleActive);
    app.post('/api/signin', passportSignIn, controllers.users.signIn);
    app.post('/api/updatePassword', passportJWT, controllers.users.updatePassword);

    app.get('/api/dashboard/admin', passportJWT, controllers.dashboard.admin);
    app.get('/api/dashboard/hospital', passportJWT, controllers.dashboard.hospital);
    app.get('/api/dashboard/patient', passportJWT, controllers.dashboard.patient);
    app.get('/api/dashboard/doctor', passportJWT, controllers.dashboard.doctor);
    app.get('/api/dashboard/labAttendant', passportJWT, controllers.dashboard.labAttendant);
    app.get('/api/dashboard/fdo', passportJWT, controllers.dashboard.fdo);
    app.get('/api/dashboard/pharmacy', passportJWT, controllers.dashboard.pharmacy);



    app.get('/api/get', passportJWT, controllers.users.getAll);


    // Hospital
    app.get('/api/hospitals', passportJWT, controllers.hospitals.getAll);
    app.get('/api/hospitals/:id', passportJWT, controllers.hospitals.get);
    app.post('/api/hospitals', passportJWT, controllers.hospitals.createHospital);
    app.put('/api/hospitals/:id', passportJWT, controllers.hospitals.updateHospital);



    // Patient
    app.post("/api/createPatient", passportJWT, controllers.patients.createPatient);
    app.get('/api/patients', passportJWT, controllers.patients.getAll); // this return only those patients who I created as a Hospital
    app.get('/api/patients/:id', passportJWT, controllers.patients.get); // this returns a patient  with  id in parrms
    app.get('/api/patient', passportJWT, controllers.patients.search); // this return only those patients who I created as a Hospital
    app.put('/api/updatePatient/:id', passportJWT, controllers.patients.updatePatient);
    app.put('/api/updateFixedDisease/:id', passportJWT, controllers.patients.updatePatientFixedDisease);
    app.get('',  passportJWT,)

    // medical History Follow Up

    app.post("/api/addFollowUP", passportJWT, controllers.patients.addFollowUP);
    app.post('/api/followUps/:pid', passportJWT, controllers.patients.getFollowUps);
    app.put('/api/followUp/:fId', passportJWT, controllers.patients.updateFollowUp);
    app.delete('/api/followUp/:fId', passportJWT, controllers.patients.deleteFollowUp);
    app.post('/api/followUp/deleteMultiple', passportJWT, controllers.patients.deleteFollowUps);


    app.get('/api/followUp/:fId', passportJWT, controllers.patients.getSingleFollowup);

    // Disease Category
    app.post('/api/createDiseaseCategory', passportJWT, controllers.diseaseCategory.createDiseaseCategory);
    app.get('/api/getAllDiseaseCategories/:pid', passportJWT, controllers.diseaseCategory.getAllDiseaseCategories);
    app.get('/api/getSingleDiseaseCategory/:dcId', passportJWT, controllers.diseaseCategory.getSingleDiseaseCategory);
    app.delete('/api/deleteDiseaseCategories/:dcId', passportJWT, controllers.diseaseCategory.deleteDiseaseCategory);
    app.put('/api/UpdateDiseaseCategory/:id', passportJWT, controllers.diseaseCategory.updateDiseaseCategory);
    app.post('/api/defaultList/:pid', controllers.diseaseCategory.createDefaultDiseaseCategory);

    // Doctors
    app.post("/api/createDoctor", passportJWT, controllers.doctors.createDoctor);
    app.get('/api/doctors', passportJWT, controllers.doctors.getAll); // this return only those patients who I created as a Hospital
    app.get('/api/doctors/:id', passportJWT, controllers.doctors.get); // this returns a patient  with  id in parrms
    app.get('/api/doctor', passportJWT, controllers.doctors.search); // this return only those patients who I created as a Hospital
    app.put('/api/updateDoctor/:id', passportJWT, controllers.doctors.updateDoctor);

    // Front Desk Officers
    app.get('/api/fdo/getFDOList', passportJWT, controllers.frontDeskOfficer.getFdoList);

    app.post("/api/fdo", passportJWT, controllers.frontDeskOfficer.create);
    app.get('/api/fdos', passportJWT, controllers.frontDeskOfficer.get); // this return only those FDOs who I created as a Hospital
    app.get('/api/fdo/:id', passportJWT, controllers.frontDeskOfficer.getById); // this returns a FDO  with  id in parrms
    app.put('/api/fdo/:id', passportJWT, controllers.frontDeskOfficer.update);
    app.get('/api/fdo', passportJWT, controllers.frontDeskOfficer.search); // this return only those patients who I created as a Hospital


    // Pharmacy
    app.post("/api/pharmacy", passportJWT, controllers.pharmacy.create);
    app.get('/api/pharmacies', passportJWT, controllers.pharmacy.get); // this return only those pharmacy who I created as a Hospital
    app.put('/api/pharmacy/updatePrescription/:id', passportJWT, controllers.pharmacy.prescriptionMarkedGiven);
    app.put('/api/pharmacy/:id', passportJWT, controllers.pharmacy.update);
    app.get('/api/pharmacy', passportJWT, controllers.pharmacy.search); // this return only those pharmacy who I created as a Hospital
    app.get('/api/pharmacy/getPrescriptions', passportJWT, controllers.pharmacy.getPrescriptions);
    app.get('/api/pharmacy/getPrescription/:id', passportJWT, controllers.pharmacy.getPrescription); // this returns a Prescription with  id in parrms
    app.get('/api/pharmacy/:id', passportJWT, controllers.pharmacy.getById); // this returns a pharmacy with  id in parrms
    app.get('/api/phrmacyList', passportJWT, controllers.pharmacy.getPharmacyList);


    // labAttendant
    app.post("/api/labAttendant", passportJWT, controllers.labAttendant.create);
    app.get('/api/labAttendants', passportJWT, controllers.labAttendant.get); // this return only those patients who I created as a Hospital
    app.get('/api/labAttendant/:id', passportJWT, controllers.labAttendant.getById); // this returns a patient  with  id in parrms
    app.put('/api/labAttendant/:id', passportJWT, controllers.labAttendant.update);
    app.get('/api/labAttendant', passportJWT, controllers.labAttendant.search); // this return only those patients who I created as a Hospital
    app.get('/api/labAttendantList', passportJWT, controllers.labAttendant.getLabAttendentList);

    // lab Reports
    app.post("/api/labReport", passportJWT, controllers.labReport.create); // create getByLabAttendant
    app.get("/api/labReport/patient/:id", passportJWT, controllers.labReport.getByPatientId); // get all wrt patient id, upcoming to category wise , pending by , completed by patient id , completed by user , search by patient
    app.get("/api/labReport/category", passportJWT, controllers.labReport.getByCategory); // get all wrt patient id, upcoming to category wise , pending by , completed by patient id , completed by user , search by patient
    app.get("/api/labReport/getByLabAttendant", passportJWT, controllers.labReport.getByLabAttendant); // get all getByLabAttendant
    app.get("/api/labReport/:id", passportJWT, controllers.labReport.get); // get by Id  for detail with files
    app.put("/api/labReport/:id", passportJWT, controllers.labReport.update); // upload the files and description by lab Attendant




    app.post("/api/createAppointment", passportJWT, controllers.appointments.createAppointment);
    app.get('/api/appointment/:id', passportJWT, controllers.appointments.get); // this returns an appointment  with  id in parrms
    app.delete('/api/appointment/:id', passportJWT, controllers.appointments.del); // this delete an appointment  with  id in parrms
    app.put('/api/appointment/:id', passportJWT, controllers.appointments.update); // this update an appointment  with  id in parrms
    app.get("/api/appointment", passportJWT, controllers.appointments.getAll);

    // Employee
    app.post('/api/employee/createEmployee', passportJWT, controllers.employee.createEmployee); //done
    app.delete('/api/employee/:employeeId', passportJWT, controllers.employee.deleteEmployee); //done
    app.get('/api/employee', passportJWT, controllers.employee.search); //done

    app.post('/api/employee/createRole', passportJWT, controllers.employee.createRole); //done
    app.delete('/api/employee/role/:roleId', passportJWT, controllers.employee.deleteRole); //done
    app.get('/api/employee/getAllRoles', passportJWT, controllers.employee.getAllRoles); //done

    app.post(
        '/api/patient/document',
        patientDocMulter.single("patientDocuments"),
        controllers.patientDocuments.createDocument,
    );




    app.get('/api/chat/friends', passportJWT, controllers.chat.friends);
    app.get('/api/chat/getUserMessages', passportJWT, controllers.chat.userMessageHistory);
    app.get('/api/chat/friends/:userId', passportJWT, controllers.chat.addFriend);
    app.get('/api/chat/history/:userId', passportJWT, controllers.chat.history);
    app.put('/api/readMessage/:id', passportJWT, controllers.chat.updateMessageStatusRead);

    // router.route('/dashboard')
    // .get(passportJWT, UsersController.dashboard);

    // router.route('/status')
    // .get(passportJWT, UsersController.checkAuth);

    // Billing Api's
    app.get('/api/billing/get', passportJWT, controllers.billing.get);
    app.get('/api/billing/outstanding', passportJWT, controllers.billing.outstanding);
    app.post('/api/billing/create', passportJWT, controllers.billing.create);
    app.get('/api/billing/:id', controllers.billing.getById);
    app.get('/api/billing/patient/:patientID', passportJWT, controllers.billing.getByPatientId);
    app.get('/api/billing/doctor/:doctorID', passportJWT, controllers.billing.getByDoctor);


    // File Uploader
    var cpUpload = multy.single('file');
    app.post(`/api/upload`, cpUpload, controllers.upload.uploadFile);
    app.delete(`/api/upload/delete`, controllers.upload.deleteFile);



}
