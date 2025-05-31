const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  occupation: { type: String },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  gender: {
    type: String,
    default: 'Male'
  },
  description: { type: String },
  maritalStatus: { type: String },
  tribe: { type: String },
  religion: { type: String },
  dob: {
    type: Date,
    default: Date.now
  },
  vitals: [],
  vitalsUpdatedAt: { type: Date },

  problems_PastMedicalHistory: {
    type: String,
    default: ""
  },

  drugHistory: {
    type: String,
    default: ""
  },

  surgicalHistory: {
    type: String,
    default: ""
  },

  obstetrics_GynacologyHistory: {
    type: String,
    default: ""
  },
  vaccines: {
    type: String,
    default: ""
  },
  allergies: {
    type: String,
    default: ""
  },
  reports: [
    {
      category: String,
      file: String,
      fileName: String
    }
  ],

  visit: [
    {
      doctorId: {
        type: Schema.Types.ObjectId,
        ref: "doctors"
      },
      walkIn: {
        type: Date,
        default: Date.now
      },
      walkOut: {
        type: Date,
        default: Date.now
      }
    }
  ]

});



const Patient = mongoose.model('patient', PatientSchema);

// Export the model
module.exports = Patient;
