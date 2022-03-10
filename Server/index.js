const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/users");
const ExpenseTracker = require("./models/Expensetrack");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = require("./middlewares/auth");
const connectDB = require("./connection/connection");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
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
//Register
app.post("/register", async (req, res) => {
  try {
    const { username, password, confirm_password, email } = req.body;
    if (!username || !password || !confirm_password) {
      return res
        .status(200)
        .json({ success: false, message: "All fields are required" });
    } else {
      const olduser = await User.findOne({ email });
      const redundance = await User.findOne({ username });
      if (olduser) {
        return res
          .status(200)
          .json({ success: false, message: "User already exists" });
      }
      if (redundance) {
        return res
          .status(200)
          .json({ success: false, message: "Username already exists" });
      }
      if (password !== confirm_password) {
        return res
          .status(200)
          .json({ success: false, message: "passwords don't match" });
      } else {
        const encryptPass = await bcrypt.hash(password, 10);
        const user = new User({
          username: username,
          Password: encryptPass,
          email: email.toLowerCase(),
        });
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "4h",
          }
        );
        user.token = token;
        req.session.token = token;
        req.headers["x-access-token"] = token;
        user
          .save()
          .then(res.status(200).json({ success: true, data: user }))
          .catch((error) => {
            console.log(error);
          });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "User Doesn't Exist" });
    } else {
      if (await bcrypt.compare(password, user.Password)) {
        const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: "4h",
        });

        const updatedUser = await User.updateOne(
          { username: user.username },
          { $set: { token: token } },
          { new: true, runValidators: true, credentials: true }
        );
        if (!updatedUser) {
          console.log("hehe");
        }

        /*await User.updateOne(
          { username: user.username },
          { $set: { token: token } }
        ).catch((err) => {
          console.log(err);
        });*/
        req.session.token = token;
        console.log("updated", req.session.token);
        return res
          .status(200)
          .json({ success: true, data: updatedUser, token: token });
      } else {
        return res
          .status(200)
          .json({ success: false, message: "Wrong Password" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

//Expensetracking

app.post("/expensetracker", auth, async (req, res) => {
  const { Transaction_type, amount, note } = req.body;
  if (!Transaction_type || !amount || !note) {
    return res
      .status(200)
      .json({ success: true, message: "All fields are required" });
  } else {
    const token = req.body.token;
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
});

app.get("/expensetracker", auth, async (req, res) => {
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
});

app.get("*", (req, res) => {
  return res.status(404).send("<h1>Wrong Url</h1>");
});

app.listen(process.env.PORT, () => {
  return console.log("server running on port 5000");
});
