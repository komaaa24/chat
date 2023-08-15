const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: [true, "Name is Required"],
  },
  watched: [{ type: String }],
});

module.exports = mongoose.model("User", userSchema);
