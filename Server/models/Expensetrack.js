const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  Transaction_type: String,
  Amount_Changed: Number,
  Notes: String,
});

module.exports = mongoose.model("ExpenseTracker", expenseSchema);
