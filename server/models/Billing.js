const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');


const Schema = mongoose.Schema;

const BillingSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: "patient"
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "doctor"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    paymentMethod: {
        type: String,
        enum: ["cash", "paypal"]
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    items: [],
    discount: {
        type: Number,
        default: 0
    }
});

BillingSchema.plugin(timestamps);
const Billing = mongoose.model('billing', BillingSchema);

// Export the model
module.exports = Billing;