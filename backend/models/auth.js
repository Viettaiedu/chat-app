const mongoose = require("mongoose");
const AuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    profilePic: {
      type: String,
      default:""
    },
    coverPic: {
      type: String,
      default:""
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auth", AuthSchema);
