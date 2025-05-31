const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const DiseaseSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    diseaseCategory: String,
    diseaseSubCategory: String,
    presentingComplaint: String,
    historyOfPresentingComplaint: String,
    physicalExamination: String,
    provisionalDiagnosis: String,
    investigations: String,
    finalDiagnosis: String,
    treatment: String,
    outcome: String,
    prescription: [],
    isPrescriptionGiven: {
        type: Boolean,
        default: false,
        enum: [true, false]
    }
});

DiseaseSchema.plugin(mongoosePaginate);
DiseaseSchema.plugin(timestamps);
const Disease = mongoose.model('disease', DiseaseSchema);

// Export the model
module.exports = Disease;