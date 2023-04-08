

const Conversation = require("../models/conversation");

const getConversation = async (req, res) => {
    const data = await Conversation.find({});
    res.json(data);
};

const addConversation = async (req,res) => {
    const members = req.body.members;
    const newConversation = new Conversation({members});
    const data = await newConversation.save();
    res.json(data);
}


module.exports = { getConversation ,addConversation};
