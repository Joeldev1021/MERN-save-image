const UserService = require('./user.service');
const bcrypt = require('bcrypt');
const { generateToken, destroyToken } = require('../utils');
const { HttpStatus } = require('../config/httpStatus');

class AuthService {
	async register({ user }) {
		try {
			const userFoundEmail = await UserService.findByEmail(user.email);
			if (userFoundEmail) {
				throw new Error(`User with this email ${user.email} already`);
			}

			const hashedPassword = await bcrypt.hash(user.password, 10);
			const userSave = await UserService.create({
				...user,
				password: hashedPassword,
			});
			const tokenData = await generateToken(userSave);
			return {
				token: tokenData,
			};
		} catch (error) {
			throw new Error(error);
		}
	}

	async login({ email, password }) {
		try {
			const existedUserEmail = await UserService.findByEmail(email);
			if (!existedUserEmail) {
				throw new Error('credentails incorret');
			}

			const matchPasword = await bcrypt.compare(
				password,
				existedUserEmail.password
			);
			if (!matchPasword) {
				throw new Error('credentails incorret');
			}
			const token = await generateToken(existedUserEmail);
			return token;
		} catch (error) {
			throw error;
		}
	}

	async logout(req) {
		const authLogout = req.headers.authorization;
		try {
			const islogout = await destroyToken(authLogout);
			return islogout;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = new AuthService();
