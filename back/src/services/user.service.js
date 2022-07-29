const User = require("../models/user.schema");

class UserService {
  async getAllUser () {
    try {
      return await User.find();
    } catch (error) {
      throw new Error("error finds all user");
    }
  }

  async getUserById (id) {
    try {
      return await User.findById(id);
    } catch (error) {
      throw new Error("error in getting user by ID", id);
    }
  }

  async getUserByUsername (username) {
    try {
      return await User.findOne({ username });
    } catch (error) {
      throw new Error("error get user by username", username);
    }
  }

  async getUserByEmail (email) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw new Error("error getting User By Email", email);
    }
  }

  async createUser (user) {
    try {
      const newUser = new User(user);
      return newUser.save();
    } catch (error) {
      throw new Error("error created user");
    }
  }

  async updateUser (id, data) {
    try {
      return await User.findByIdAndUpdate(id, data);
    } catch (error) {
      throw new Error("error in update user ", id);
    }
  }

  async deleteUser (id) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("error deleted user ", id);
    }
  }
}

module.exports = new UserService();
