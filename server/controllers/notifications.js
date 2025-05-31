const fieldValidation = require("../utils/field-validator");
const Notification = require("../models/Notification");
const responseHandler = require("../utils/response-handler");


function getNotificationsByUserID(req, res, next) {
    Notification.find({ sentTo: req.params.id }).populate('createdBy', 'name image').sort({ 'date': 'desc' })
        .exec(function (err, doc) {
            if (err) { responseHandler(res, 500, err); return; };
            responseHandler(res, 200, doc);
        })
}


// creates a notification and saves in DB
async function create(req, res, next) {
    try {
        if (!fieldValidation(req, res)) return;
        let notification = {
            cretaedBy: req.user._id,
            sentTo: req.body.sentTo,
            description: req.body.description,
            category: req.body.category,
        };
        let newNotification = await new Notifications(notification).save();
        responseHandler(res, 200, newNotification);
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Notification Not created' });
    }
}

function updateNotificationStatusRead(req, res, next) {
    try {
        Notification.findByIdAndUpdate({ _id: req.params.id }, { status: "read" }, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Notification' });
    }
}

// sets is Delete to true
function deleteNotification(req, res) {
    Notification.findByIdAndDelete({ _id: req.params.id }, (error, document) => {
        if (error) {
            res.status(500).json({ msg: 'Server Error', error: error })
        }
        res.status(200).json({ msg: 'Notification Deleted' });
    })
}

// function delet(req, res, next) {

// }

module.exports = {
    create,
    getNotificationsByUserID,
    updateNotificationStatusRead,
    deleteNotification
};