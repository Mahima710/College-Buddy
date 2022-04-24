const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./connection/connection");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./Routes/AuthRoutes");
const expenseRoutes = require("./Routes/ExpenseTrackerRoutes");
const cors = require("cors");
connectDB();
app.use(
  cors({
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    credentials: true,
  })
);
//app.use makes middleware that's used in all the methods declared below it
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cookieParser({
    name: "college-buddy",
    secret: process.env.SECRET,
    credentials: true,
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
