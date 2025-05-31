var Ticket = require("../models/ticket");
var Chat = require("../models/chat");
var Notification = require("../models/Notification");
module.exports = (io) => {

    io.on('connection', (socket) => {
        console.log('Client connected to home', socket.id);

        // create Notification
        socket.on("createNotification", (notification) => {
            console.log('----->here', notification);

            notification.sentTo.forEach(element => {
                new Notification({
                    createdBy: notification.createdBy,
                    description: notification.description,
                    category: notification.category,
                    sentTo: element,
                    naviagteUrl: notification.naviagteUrl
                }).save((err, doc) => {
                    if (doc) {
                        doc.populate('createdBy', 'name image _id')
                            .populate('sentTo', 'name image _id').execPopulate((err, doc) => {
                                console.log('Notification Saved', doc)
                                io.emit(element + 'Notifi', doc);
                                console.log("Notification dispatched.");
                            })
                    }

                })
            });
        });


        socket.on("hosRequest", (notification) => {
            console.log('here', notification);

            notification.sentTo.forEach(element => {
                new Notification({

                    description: notification.description,
                    category: notification.category,
                    sentTo: element,

                }).save((err, doc) => {
                    if (doc) {
                        doc.populate('sentTo', 'name image _id').execPopulate((err, doc) => {
                            console.log('Notification Saved', doc)
                            io.emit(element + 'Notifi', doc);
                            console.log("Notification dispatched.");
                        })
                    }

                })
            });
        });


        // get all Devices
        socket.on('adminGetAllTickets', () => {


            Ticket.find({})
                .populate('createdBy')
                .exec((err, docs) => {
                    console.log('in getTickets', docs)
                    if (docs) {
                        socket.emit('adminGetTickets', docs);
                    }
                })
        });

        // create Ticket
        socket.on('createTicket', ({ subject, createdBy, description }) => {
            new Ticket({
                createdBy: createdBy,
                subject: subject,
                description: description
            }).save((description, doc) => {
                if (doc) {
                    Ticket.find({ createdBy: createdBy })
                        .populate('createdBy')
                        .exec((err, docs) => {

                            if (docs) {
                                socket.emit('adminGetTickets', docs);
                            }
                        })
                    Ticket.find({ createdBy: createdBy })
                        .populate('createdBy')
                        .exec((err, docs) => {

                            if (docs) {
                                socket.emit('getMyTickets', docs);
                            }
                        })
                }
            })
        });

        // GET MY Tickets
        socket.on('getMyTicket', ({ createdBy }) => {

            Ticket.find({ createdBy: createdBy })
                .populate('createdBy')
                .exec((err, docs) => {

                    if (docs) {
                        socket.emit('getMyTickets', docs);
                    }
                })
        });

        // create chat and push in the Chats Array and notify the users that chats is here
        /*
        // sending to all clients in 'game' room except sender
        socket.to('game').emit('nice game', "let's play a game");

        // sending to all clients in 'game1' and/or in 'game2' room, except sender
        socket.to('game1').to('game2').emit('nice game', "let's play a game (too)");
        */



        socket.on("sendMessage", function (message) {
            console.log("Message received:");
            console.log(message);
            let chat = new Chat(message);
            chat.save((err, doc) => {
                doc.populate('createdBy', 'name image _id')
                    .populate('sentTo', 'name image _id').execPopulate((err, doc) => {
                        console.log('message Saved', doc)
                        io.emit(message.sentTo + 'Msg', doc);
                        console.log("Message dispatched.");
                    })
            });

        });




    });
}