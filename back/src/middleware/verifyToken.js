const jwt = require("jsonwebtoken");
const User = require("../models/user.schema");

const veryToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) throw new Error("token no provided");
    const userId = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
    const user = await User.findById(userId.id, { password: 0 });
    if (!user) throw new Error("token invalid or expired");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = veryToken;
