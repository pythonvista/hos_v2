const User = require("../models/User");
const Chat = require("../models/chat");

const responseHandler = require("../utils/response-handler");

function friends(req, res, next) {
    try {
        User.findOne({ _id: req.user._id }, 'friend').populate('friend', 'name image _id role').exec(
            (err, friends) => {
                if (err) {
                    console.error(err)
                    responseHandler(res, 200, { msg: 'There is no Friends' });
                } else {
                    responseHandler(res, 200, { friends: friends.friend });
                }
            })


    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'from catch Friends Not Found' });
    }
}

async function addFriend(req, res, next) {
    try {

        let update1 = await User.updateOne({
            _id: req.params.userId,
            'friend': { $ne: req.user._id }
        }, { $push: { friend: req.user._id } });

        let update2 = await User.updateOne({
            _id: req.user._id,
            'friend': { $ne: req.params.userId }
        }, { $push: { friend: req.params.userId } });
        if (update1 && update2) {
            responseHandler(res, 200, { msg: [update1, update2] });
        }

    } catch (error) {
        console.log(error);
        responseHandler(res, 500, { msg: 'Friend cannot be added' });
    }
}

function history(req, res, next) {
    try {
        Chat.find(

            {
                $or: [{ sentTo: req.params.userId, createdBy: req.user._id },
                { createdBy: req.params.userId, sentTo: req.user._id }
                ]
            }


        )
            .populate('createdBy', 'name image _id')
            .populate('sentTo', 'name image _id')
            .sort({ 'date': 'asc' })
            .skip(+req.query.pageSize * +req.query.pageNo)
            .limit(+req.query.pageSize)
            .exec(
                (err, chatHistory) => {
                    if (err) {
                        responseHandler(res, 204, { msg: 'History Not Found' });
                    }
                    responseHandler(res, 200, { chat: chatHistory });

                });
    } catch (error) {
        console.log(error);
        responseHandler(res, 204, { msg: 'History Not Found' });
    }
}

function userMessageHistory(req, res, next) {
    try {
        Chat.find({ sentTo: req.user._id, status: "un-read" })
            .populate('createdBy', 'name image _id')
            .sort({ 'date': 'desc' })
            // .skip(+req.query.pageSize * +req.query.pageNo)
            // .limit(+req.query.pageSize)
            .exec(
                (err, messages) => {
                    if (err) {
                        responseHandler(res, 204, { msg: 'Messages Not Found' });
                    }
                    responseHandler(res, 200, { userMessages: messages });

                });
    } catch (error) {
        console.log(error);
        responseHandler(res, 204, { msg: 'History Not Found' });
    }
}


function updateMessageStatusRead(req, res, next) {
    try {
        Chat.findByIdAndUpdate({ _id: req.params.id }, { status: "read" }, { new: true }, (error, document) => {
            if (error) {
                responseHandler(res, 500, error.msg);
            }
            responseHandler(res, 200, document);
        })
    } catch (e) {
        console.error(e);
        responseHandler(res, 500, { msg: 'Error Updating Chat Status' });
    }
}




module.exports = {
    friends,
    addFriend,
    history,
    userMessageHistory,
    updateMessageStatusRead
};