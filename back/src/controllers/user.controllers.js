const UserService = require('../services/user.service');

class UserController {
	async findAll(req, res) {
		const users = await UserService.findAll();
		res.json({
			messages: 'get all users success',
			users,
		});
	}

	async findById(req, res) {
		const { id } = req.params;
		const user = await UserService.findById(id);
		if (!user) {
			res.status(404).json({
				message: 'user not found',
			});
		}
		res.json({
			message: 'get user by id success',
			user,
		});
	}

	async findByEmail(req, res) {
		const { email } = req.params;
		const user = await UserService.findByEmail(email);
		if (!user) {
			res.status(404).json({
				message: 'user by email not found',
			});
		}
		res.json({
			message: 'get user by email success',
			user,
		});
	}

	async update(req, res) {
		const { id } = req.params;
		const user = await UserService.update(id, req.body);
		if (!user) {
			res.status(404).json({
				message: 'user not found',
			});
		}
		res.status(200).json({
			message: 'update user success',
			user,
		});
	}

	async delete(req, res) {
		const { id } = req.params;
		const user = await UserService.delete(id);
		if (!user) {
			res.status(404).json({
				message: 'user not found',
			});
		}
		res.status(200).json({
			message: `delete ${user.name} success`,
		});
	}

	async findProfile(req, res) {
		res.json({ user: req.user });
	}
}

module.exports = new UserController();
