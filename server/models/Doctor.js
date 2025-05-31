const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    cadre: { type: String },
    department: { type: String },
    specialty: { type: String },
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



const Doctor = mongoose.model('doctor', DoctorSchema);

// Export the model
module.exports = Doctor;