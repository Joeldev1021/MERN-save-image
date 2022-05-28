const User = require("../models/user.schema");
class UserService {
  async getAllUser () {
    try {
      return await User.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserById (id) {
    return await User.findById(id);
  }

  async getUserByEmail (email) {
    return await User.findOne({ email });
  }

  async updateUser (id, data) {
    return await User.findByIdAndUpdate(id, data);
  }

  async deleteUser (id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new UserService();
