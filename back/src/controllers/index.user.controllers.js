const jwt = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../models/UserSchema");

const getProfile = async (req, res) => {
  // res.json("signup")//singUp is first user in the application
  res.json({ user: req.user });
};

const singUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) throw createError.Unauthorized("user already exists");
    if (password.length <= 3) {
      throw createError.Unauthorized(
        "the password must have more than three characters"
      );
    }
    if (!user) {
      const user = await new User({ username, email });
      user.password = await user.encryPassword(password);
      const userSave = await user.save();
      const token = jwt.sign({ id: userSave._id }, process.env.SECRET_TOKEN_KEY, {
        expiresIn: "1d"
      });
      return res.json({ token });
    }
  } catch (error) {
    next(error);
  }
};

const renderSingInForm = async (req, res) => {
  const user = await User.find();
  console.log(user);
  res.json(user);
};

const singIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) throw createError.Unauthorized("the user does not exists");

    if (user) {
      const validatePassword = await user.comparedPassword(req.body.password);

      if (!validatePassword) throw createError.Unauthorized("invalid Password");

      const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN_KEY, {
        expiresIn: "1d"
      });
      return res.json({ token: token });
    }
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res) => {
  const autToken = req.headers.authorization;
  const logout = await jwt.sign({ autToken }, "logout", { expiresIn: 1 });
  res.json(logout);
};

module.exports = { singUp, singIn, logout, renderSingInForm, getProfile };
