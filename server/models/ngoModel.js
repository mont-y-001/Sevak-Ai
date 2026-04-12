const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  name: String,
  darpanId: String,
  phone: String,
  language: String,
  domain: String,
  approved: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("NGO", ngoSchema);