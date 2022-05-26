const User = require("../models/UserSchema");

class UserController {
  async getAllUser (req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = new UserController();
