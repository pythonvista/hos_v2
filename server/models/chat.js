const mongoose = require("mongoose");

const Schema = mongoose.Schema;

ChatSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    sentTo: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    message: String,
    status: {
        type: String,
        default: "un-read",
        enum: ["read", "un-read"]
    },
    date: {
        type: Date,
    }
});


const chat = mongoose.model('chat', ChatSchema);

// Export the model
module.exports = chat;