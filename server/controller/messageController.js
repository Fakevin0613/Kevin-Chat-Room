const messageModel = require("../model/messageModel");

module.exports.addMessage = async (req, res, next) => {
    try {
        const {sender, receiver, message} = req.body;
        const data = await messageModel.create({
            message: {text: message},
            users: [sender, receiver],
            sender: sender,
        });
        if(data){
            return res.json({msg: "Message added", status: true});
        }
        else{
            return res.json({msg: "message added failed", status: false});
        }
    } catch (e) {
        next(e);
    }
};

module.exports.getAllMessage = async (req, res, next) => {
    try {
        const {sender, receiver} = req.body;
        const messages = await messageModel.find({
            users: {
                $all: [sender, receiver],
            }
        }).sort({updateAt: 1});
        const formatMessages = messages.map((msg) => {
            return {
                fromSelf: msg.sender.toString() === sender,
                message: msg.message.text,
            };
        });
        return res.json(formatMessages)
    } catch (e) {
        next(e);
    }
};