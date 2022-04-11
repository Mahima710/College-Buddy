const ExpenseTracker = require("../../models/Expensetrack");
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
};

module.exports = Login;
