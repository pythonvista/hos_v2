const { timeStamp } = require("console");
const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');


const Schema = mongoose.Schema;

const LabReportSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: "patient"
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "doctor" // this will be doctor .. when user authentication will be fixed on frontend
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    by: {
        type: Schema.Types.ObjectId,
        ref: "labAttendant"
    },

    subject: { type: String, default: '' },
    category: { type: String, default: '' },
    subCategory: { type: String, default: '' },

    description: { type: String, default: '' },
    status: {
        type: String,
        default: "scheduled",
        enum: ["scheduled", "pending", "complete"]
    },
    files: [{
        type: String
    },]
});

LabReportSchema.plugin(timestamps);

const LabReport = mongoose.model('labReport', LabReportSchema);

// Export the model
module.exports = LabReport;