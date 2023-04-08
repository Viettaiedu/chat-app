const Chat = require("../models/chat");

const getChats = async (req, res) => {
  const data = await Chat.find({ conversationId: req.params.conversationId });
  res.json(data);
};

const addChat = async (req,res) => {
    const newChat = new Chat({conversationId: req.body.conversationId ,senderId:req.body.senderId ,text:req.body.text});
    const data = await newChat.save();
    res.json(data);
}

module.exports = { getChats ,addChat };
