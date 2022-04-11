const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/users");
const ExpenseTracker = require("./models/Expensetrack");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const connectDB = require("./connection/connection");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./Routes/AuthRoutes");
const expenseRoutes = require("./Routes/ExpenseTrackerRoutes");
connectDB();

//app.use makes middleware that's used in all the methods declared below it
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cookieSession({
    name: "college-buddy",
    secret: process.env.SECRET,
    httpOnly: true,
    credentials: true,
    resave: true,
  })
);

app.use("/", AuthRoutes);
app.use("/", expenseRoutes);

app.get("*", (req, res) => {
  return res.status(404).send("<h1>Wrong Url</h1>");
});

app.listen(process.env.PORT, () => {
  return console.log("server running on port 5000");
});
