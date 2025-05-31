
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PharmacySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    description: { type: String },
});

const Pharmacy = mongoose.model('pharmacy', PharmacySchema);

// Export the model
module.exports = Pharmacy;