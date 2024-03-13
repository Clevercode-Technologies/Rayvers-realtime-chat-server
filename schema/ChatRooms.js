const mongoose = require("mongoose");

const ChatRoomsSchema = mongoose.Schema({
  name: String,
  profilePic: String,
  messages: { type: mongoose.Schema.Types.Array, ref: 'Message'}
}, { timestamps: true });

const ChatRooms = mongoose.model('ChatRooms', ChatRoomsSchema);

module.exports = ChatRooms;