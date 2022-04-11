const auth = require("../middlewares/auth");
const AddExpenses = require("../Controllers/ExpenseControllers/AddExpense");
const GetExpenses = require("../Controllers/ExpenseControllers/GetExpense");
const express = require("express");

const router = express.Router();

router.route("/expensetracker").get(auth, GetExpenses);
router.route("/expensetracker").post(auth, AddExpenses);

module.exports = router;
