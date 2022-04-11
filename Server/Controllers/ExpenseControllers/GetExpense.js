const ExpenseTracker = require("../../models/Expensetrack");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const GetExpenses = async (req, res) => {
  const token = req.headers.token;
  const user = await User.findOne({ token: token });
  ExpenseTracker.find({ User: user._id }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      if (data.length === 0) {
        return res
          .status(200)
          .json({ success: true, message: "No history available" });
      } else {
        return res.status(200).json({ success: true, data: data });
      }
    }
  });
};

module.exports = GetExpenses;
