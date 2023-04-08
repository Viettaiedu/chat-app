const mongoose = require("mongoose");
const ChatSchema = new mongoose.Schema(
  {
    conversationId : {
        type :String
    } ,
    senderId : {
        type :String
    },
    text : {
        type : String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Chat',ChatSchema );