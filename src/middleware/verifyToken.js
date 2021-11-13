const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const createError = require("http-errors");

const veryToken = async (req, res, next) => {
  console.log("user verified");
  const token = req.headers["authorization"];  
    try {
      if (!token) throw createError.NotFound("token no provided");
      const userId = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
      const user = await User.findById(userId.id, { password: 0 });
      if (!user) throw createError.NotFound("token invalid or expired");
     
      req.user = user;
      next();
    } catch (error) {
      next(error)
    }
};

module.exports = veryToken;
