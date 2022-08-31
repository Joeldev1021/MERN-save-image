const { HttpStatus } = require('../config/httpStatus');
const AuthService = require('../services/auth.service');

class AuthController {
	async register(req, res) {
		try {
			const responseUser = await AuthService.register({ user: req.body });
			if (!responseUser)
				res
					.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.send('user not registered');
			res.status(200).send({
				token: responseUser.token,
			});
		} catch (error) {
			res.status(HttpStatus.BAD_REQUEST).send({ errorMessage: error.message });
		}
	}

	async login(req, res) {
		try {
			const { email, password } = req.body;
			if (!email || !password) throw new Error('fill in email and password');
			const response = await AuthService.login({ email, password });
			res.status(200).json({
				token: response,
			});
		} catch (error) {
			return res
				.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.send({ errorMessage: error.message });
		}
	}

	async logout(req, res) {
		const response = await AuthService.logout(req);
		return res.status(200).send({ token: response });
	}
}

module.exports = new AuthController();
