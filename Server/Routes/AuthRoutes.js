const Register = require("../Controllers/AuthControllers/Register");
const Login = require("../Controllers/AuthControllers/Login");
const express = require("express");

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);

module.exports = router;
