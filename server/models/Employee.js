const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EmployeerSchema = new Schema({
    name: String,
    email: {
        type: String
    },
    phone: {
        type: String,

    },
    role: {
        type: String,
    },
    dob: {
        type: Date,
    },
    joiningdate: {
        type: Date,
        default: Date.now()
    },
    salary: {
        type: Number
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
})

const Employee = mongoose.model('employee', EmployeerSchema)
module.exports = Employee;