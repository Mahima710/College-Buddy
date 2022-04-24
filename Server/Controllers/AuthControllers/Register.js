const User = require("../../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
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
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 43200000),
          secure: true,
          httpOnly: true,
          sameSite: "None",
        });
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
};

module.exports = Register;
