const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    directorName: { type: String },
    directorPhone: { type: String },
    description: { type: String },
});



const Hospital = mongoose.model('hospital', HospitalSchema);

// Export the model
module.exports = Hospital;