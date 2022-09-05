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

	async login(req, res, next) {
		try {
			const { email, password } = req.body;
			if (!email || !password) throw new Error('fill in email and password');
			const response = await AuthService.login({ email, password });
			res.status(200).json({
				token: response,
			});
		} catch (error) {
			res.status(HttpStatus.BAD_REQUEST);
			next(error);
		}
	}

	async logout(req, res) {
		const authToken = req.headers.authorization;
		try {
			const response = await AuthService.logout(authToken);
			/* this token duration 1s */
			return res.status(200).send({ token: response });
		} catch (error) {
			res
				.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.send({ errorMessage: error.message });
		}
	}
}

module.exports = new AuthController();
