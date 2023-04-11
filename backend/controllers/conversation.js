const Conversation = require("../models/conversation");

const getConversations = async (req, res) => {
  try {
    const data = await Conversation.find({
      members: { $in: [req.userInfo._id] },
    });
    return res.status(201).json(data);
  } catch (e) {
    res.status(500).json(e);
  }
};

const addConversation = async (req, res) => {
  const members = req.body.members;
  const newConversation = new Conversation({ members });
  try  {
    const data = await newConversation.save();
    res.json(data);
  }catch(e) {
    res.status(500).json(e);
  }
  
};

module.exports = { getConversations, addConversation };
