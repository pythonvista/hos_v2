const { timeStamp } = require("console");
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');


const Schema = mongoose.Schema;

const HospitalRequestSchema = new Schema({
    name: String,
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },

    phone: {
        type: String,
    },
    address: {
        type: String,
        default: "Address not provided"
    },

    city: {
        type: String,
        default: "xxxxxx"
    },
    state: {
        type: String,
        default: "xxxxxx"
    },

    directorName: { type: String },
    directorPhone: { type: String },
    // description: { type: String },
    staffDetails: { type: String },
    coverLetter: { type: String },

    status: {
        type: Number,
        default: 1,
        enum: [1, 2, 3]
    },

    isDelete: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
HospitalRequestSchema.plugin(mongoosePaginate);

const HospitalRequest = mongoose.model('hospitalRequest', HospitalRequestSchema);

// Export the model
module.exports = HospitalRequest;