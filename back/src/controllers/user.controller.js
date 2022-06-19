const UserService = require("../services/user.service");

class UserController {
  async getAllUser (req, res) {
    const users = await UserService.getAllUser();
    res.json({
      messages: "get all users success",
      users
    });
  }

  async getUserById (req, res) {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    if (!user) {
      res.status(404).json({
        message: "user not found"
      });
    }
    res.json({
      message: "get user by id success",
      user
    });
  }

  async getUserByEmail (req, res) {
    const { email } = req.params;
    const user = await UserService.getUserByEmail(email);
    if (!user) {
      res.status(404).json({
        message: "user by email not found"
      });
    }
    res.json({
      message: "get user by email success",
      user
    });
  }

  async updateUser (req, res) {
    const { id } = req.params;
    const user = await UserService.updateUser(id, req.body);
    if (!user) {
      res.status(404).json({
        message: "user not found"
      });
    }
    res.status(200).json({
      message: "update user success",
      user
    });
  }

  async deleteUser (req, res) {
    const { id } = req.params;
    const user = await UserService.deleteUser(id);
    if (!user) {
      res.status(404).json({
        message: "user not found"
      });
    }
    res.status(200).json({
      message: `delete ${user.name} success`
    });
  }

  async getProfile (req, res) {
    res.json({ user: req.user });
  }
}

module.exports = new UserController();
