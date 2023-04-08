const Auth = require("../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const info = {
      username: req.body.username,
      password: hash,
    };
    const isCheck = await Auth.find({ username: info.username });
    if (isCheck[0])
      return res
        .status(404)
        .json({ message: req.body.username + " is existing" });
    const newAuth = new Auth(info);
    const auth = await newAuth.save();
    res.status(200).json(auth);
  } catch (e) {
    res.status(500).json(e);
  }
};
const login = async (req, res) => {
  try {
    const info = {
      username: req.body.username,
      password: req.body.password,
    };
    const user = await Auth.find({ username: info.username });
    if (!user[0])
      return res.status(200).json({ message: "username is not correct" });
    const isPassword = bcrypt.compareSync(info.password, user[0].password);
    if (!isPassword)
      return res.status(404).json({ message: "password is not correct" });
    const token = jwt.sign(
      { _id: user[0]._id, username: user[0].username },
      "viettai"
    );
    res.cookie("accessToken", token);
    res.status(200).json({
      info: user[0],
      token: token,
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = { register, login };
