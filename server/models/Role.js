const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: {
        type: String
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
})

const Role = mongoose.model('role', RoleSchema);
module.exports = Role;