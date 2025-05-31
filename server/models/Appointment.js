const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: "patient"
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "doctor"
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    startDate: String,
    endDate: String,
    reason: { type: String, default: '' },
    status: {
        type: String,
        default: "scheduled",
        enum: ["scheduled", "confirm", "noshow", "intake", "checkout"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});



const appointment = mongoose.model('appointment', AppointmentSchema);

// Export the model
module.exports = appointment;