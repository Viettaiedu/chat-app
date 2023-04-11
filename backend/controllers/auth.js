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
        .status(309)
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
    let info = {
      username: req.body.username,
      password: req.body.password,
    };
    const user = await Auth.find({ username: info.username });
    if (!user[0])
      return res.status(300).json({ message: "username is not correct" });
    const isPassword = bcrypt.compareSync(info.password, user[0].password);
    if (!isPassword)
      return res.status(300).json({ message: "password is not correct" });
    const token = jwt.sign(
      { _id: user[0]._id, username: user[0].username },
      "viettai"
    );
    res.cookie("accessToken", token);
    info = user[0];
    res.status(200).json(info);
  } catch (e) {
    res.status(500).json(e);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await Auth.findOne({ _id: req.params._id });
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};
const updateUser = async (req, res) => {
  try {
    const update = {
      profilePic: req.body.profilePic,
      coverPic: req.body.coverPic,
    };
    const user = await Auth.findOneAndUpdate({ _id: req.body._id }, update);
    const userUpdated = await Auth.findOne({ _id: req.body._id });
    if (!user) return res.status(303).json({ message: "Update failed" });
    return res.status(200).json(userUpdated);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { register, login, getUser, updateUser };
