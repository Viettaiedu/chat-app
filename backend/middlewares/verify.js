const jwt = require("jsonwebtoken");
const verify = (req, res , next) => {
  const token = req.cookies["accessToken"];
  if (!token) return res.status(404).json({ message: "Token is not valid" });
  const decoded = jwt.verify(token, "viettai");
  req.userInfo = decoded;
  next();
};

module.exports = { verify };
