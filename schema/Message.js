const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    text: String,
    profilePic: String,
    room: String,
    user: String,
    clientOffset: String,
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;