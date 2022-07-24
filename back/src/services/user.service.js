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
    try {
      return await User.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserByUsername (username) {
    try {
      return await User.findOne({ username });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUserByEmail (email) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser (user) {
    try {
      const newUser = new User(user);
      return newUser.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser (id, data) {
    try {
      return await User.findByIdAndUpdate(id, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser (id) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new UserService();
