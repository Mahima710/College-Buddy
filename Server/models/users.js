const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  Password: String,
  token: { type: String },
  Expenses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Expenses",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
