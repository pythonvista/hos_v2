const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LabAttendantSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    category: { type: String },
    gender: {
        type: String,
        default: 'Male'
    },
    dob: {
        type: Date,
        default: Date.now
    },
    description: { type: String },
});



const LabAttendant = mongoose.model('labAttendant', LabAttendantSchema);

// Export the model
module.exports = LabAttendant;