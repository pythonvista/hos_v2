const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

NotificationSchema = new Schema({

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    description: String,
    category: {
        type: Number,
        // 1-> vitals
        // 2-> for appointments
        // 3-> for payments
        // 4-> lab reports/tests
        // 5-> prescriptions
        // 6-> Hos Request
        enum: [1, 2, 3, 4, 5, 6]
    },
    sentTo: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    status: {
        type: String,
        default: "un-read",
        enum: ["read", "un-read"]
    },
    naviagteUrl: {
        type: String,
        default: ''
    },
    // date: {
    //     type: Date,
    //     default: Date.now()
    // }
});


NotificationSchema.plugin(timestamps);
const notification = mongoose.model('Notification', NotificationSchema);

// Export the model
module.exports = notification;
