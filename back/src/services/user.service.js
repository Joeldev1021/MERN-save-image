const User = require('../models/user.schema');

class UserService {
	async findAll() {
		return User.find();
	}

	async findById(id) {
		return User.findById(id);
	}

	async findByUsername(username) {
		return User.findOne({ username });
	}

	async findByEmail(email) {
		return User.findOne({ email });
	}

	async create(user) {
		const newUser = new User(user);
		return newUser.save();
	}

	async update(id, data) {
		return User.findByIdAndUpdate(id, data);
	}

	async delete(id) {
		return User.findByIdAndDelete(id);
	}
}

module.exports = new UserService();
