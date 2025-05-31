
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FrontDeskOfficerSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
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


const FrontDeskOfficer = mongoose.model('frontDeskOfficer', FrontDeskOfficerSchema);

// Export the model
module.exports = FrontDeskOfficer;