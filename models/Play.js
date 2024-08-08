const mongoose = require("mongoose");

const PlaySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  result: {
    type: Boolean,
    default: false,
  },
});

module.exports = Play = mongoose.model("play", PlaySchema);
