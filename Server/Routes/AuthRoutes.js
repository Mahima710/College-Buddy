const Register = require("../Controllers/AuthControllers/Register");
const Login = require("../Controllers/AuthControllers/Login");
const Logout = require("../Controllers/AuthControllers/Logout");
const express = require("express");

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

module.exports = router;
