const Chat = require("../models/chat");

const getChats = async (req, res) => {
  try {
    const data = await Chat.find({ conversationId: req.params.conversationId });
    res.status(200).json(data);
  }catch(e) {
    res.status(500).json(e);
  }
  
};

const addChat = async (req,res) => {
    const newChat = new Chat({conversationId: req.body.conversationId ,senderId:req.body.senderId ,text:req.body.text});
    try {
      const data = await newChat.save();
     return res.json(data);
    }catch(e) {
      res.status(500).json(e);
    }
    
    
}

module.exports = { getChats ,addChat };
