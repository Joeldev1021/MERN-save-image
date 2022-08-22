const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
  return await jwt.sign({ id: user._id }, process.env.SECRET_TOKEN_KEY, {
    expiresIn: "1d"
  });
};

const destroyToken = async (authToken) => {
  const islogout = await jwt.sign({ authToken }, "logout", { expiresIn: 1 });
  console.log(islogout);
};

module.exports = { generateToken, destroyToken };
