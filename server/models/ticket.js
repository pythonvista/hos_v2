const mongoose = require("mongoose");

const Schema = mongoose.Schema;

TicketSchema = new Schema({
    subject:  String,
    description:  String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    chat: [{
        msg: String,
        by: {
            type: Schema.Types.ObjectId,
            ref: "user"
        },
    }]
});



const ticket = mongoose.model('ticket', TicketSchema);

// Export the model
module.exports = ticket;
