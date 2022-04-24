const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  if (req.cookies) token = req.cookies.jwt;
  if (!token) {
    return res.status(404).json({ success: false, message: "Token not found" });
  } else {
    try {
      jwt.verify(token, process.env.TOKEN_KEY);
    } catch (err) {
      return res
        .status(500)
        .json({ success: false, message: "Please login again", error: err });
    }
  }
  return next();
};

module.exports = verifyToken;
