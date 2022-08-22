const User = require('../models/user.schema');

class UserService {
	async findAll() {
		try {
			return await User.find();
		} catch (error) {
			throw new Error('Error finds all user');
		}
	}

	async findById(id) {
		try {
			return await User.findById(id);
		} catch (error) {
			throw new Error('Error in getting user by ID', id);
		}
	}

	async findByUsername(username) {
		try {
			return await User.findOne({ username });
		} catch (error) {
			throw new Error('Error get user by username', username);
		}
	}

	async findByEmail(email) {
		try {
			return await User.findOne({ email });
		} catch (error) {
			throw new Error('Error getting User By Email', email);
		}
	}

	async create(user) {
		try {
			const newUser = new User(user);
			return newUser.save();
		} catch (error) {
			throw new Error('Error created user');
		}
	}

	async update(id, data) {
		try {
			return await User.findByIdAndUpdate(id, data);
		} catch (error) {
			throw new Error('Error in update user ', id);
		}
	}

	async delete(id) {
		try {
			return await User.findByIdAndDelete(id);
		} catch (error) {
			throw new Error('Error deleted user ', id);
		}
	}
}

module.exports = new UserService();
