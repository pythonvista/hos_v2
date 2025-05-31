const { timeStamp } = require("console");
const mongoose = require("mongoose");
// var timestamps = require('mongoose-timestamp');
var timestamps = require('mongoose-timestamp2');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: { type: String },
    username: { type: String, unique: true },
    password: String,

    resetPasswordToken: String,
    resetPasswordExpires: Date,

    isEmailVerified: {
        type: Boolean,
        default: false,
        enum: [true, false]
    },
    emailVerifyToken: String,
    emailVerifyExpires: Date,
    role: {
        type: String,
        default: "patient",
        enum: ["admin", "hospital", "patient", "doctor", "labAttendant", "FDO", "pharmacy"]
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: "user",
        default: null
    },
    friend: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }],
    address: {
        type: String,
        default: "Address not provided"
    },
    image: {
        type: String,
        default: `/images/admins.png`
    },
    approved: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String,
    },
    city: {
        type: String,
        default: "xxxxxx"
    },
    state: {
        type: String,
        default: "xxxxxx"
    },
    approved: {
        type: Boolean,
        default: true
    },
    active: {
        type: Boolean,
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now()
    // }
});

UserSchema.methods.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.local.password);
    } catch (error) {
        throw new Error(error);
    }
}

UserSchema.methods.addFriend = async function (id) {
    this.friend.push(id);
}

UserSchema.plugin(timestamps);



// module.exports = mongoose.model("users", UserSchema);
// Create a model
const User = mongoose.model('user', UserSchema);

// Export the model
module.exports = User;