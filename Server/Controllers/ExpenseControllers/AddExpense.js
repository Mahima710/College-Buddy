const ExpenseTracker = require("../../models/Expensetrack");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/users");

const AddExpense = async (req, res) => {
  const { Transaction_type, amount, note } = req.body;
  if (!Transaction_type || !amount || !note) {
    return res
      .status(200)
      .json({ success: true, message: "All fields are required" });
  } else {
    const token = req.cookies.jwt;
    const user = await User.findOne({ token: token });
    const ExpenseObj = new ExpenseTracker({
      Transaction_type: Transaction_type,
      Amount_Changed: amount,
      Notes: note,
      User: user._id,
    });
    ExpenseObj.save()
      .then(res.status(200).json({ success: true, data: ExpenseObj }))
      .catch((error) => {
        console.log(error);
      });
  }
};

module.exports = AddExpense;
