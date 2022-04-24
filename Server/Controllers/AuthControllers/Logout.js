const Logout = async (req, res) => {
  await res.cookie("jwt", "expired Token", {
    httpOnly: true,
    expires: new Date(Date.now() + 10000),
    secure: false,
  });
  return res.status(200).json({ message: "successfully logged out" });
};

module.exports = Logout;
