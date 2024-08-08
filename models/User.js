const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  tgid: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  totalScore: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  energy: {
    type: Number,
    default: 10,
  },
  lastPlayDate: {
    type: Date,
    default: Date.now,
  },
  walletAddress: {
    type: String,
    default: "",
  },
  referrer: {
    type: String,
    default: "",
  },
  referral: {
    type: Array,
    default: [],
  },
});

module.exports = User = mongoose.model("user", UserSchema);
