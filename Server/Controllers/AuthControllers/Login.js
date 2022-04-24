const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/users");

const Login = async (req, res) => {
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
          console.log("something went wrong");
        }
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 43200000),
          secure: true,
          httpOnly: true,
          sameSite: "None",
        });
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
};

module.exports = Login;
