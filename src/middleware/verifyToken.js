const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");



const veryToken = async (req, res, next) => {
  
  const token = req.headers["authorization"];

  if (!token) res.json("token no provided");
  if (token) {
    try {
      const userId = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
      const user = await User.findById(userId.id,{password:0})
      if (!user) {
        return res.json("error token");
      }else {
        console.log("very token");
        req.user = user
        next();
      }
    } catch (error) {
      console.log(error.name);
    }
  }
};

module.exports = veryToken;
