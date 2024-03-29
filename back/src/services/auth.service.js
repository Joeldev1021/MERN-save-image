const UserService = require('../services/user.service');
const bcrypt = require('bcrypt');
const { generateToken, destroyToken } = require('../utils');
// const { HttpStatus } = require('../config/httpStatus');

class AuthService {
    async register(username, email, password) {
        try {
            const userFoundEmail = await UserService.findByEmail(email);
            if (userFoundEmail) {
                throw new Error(`User with this email ${email} already`);
            }
            const userFoundByUsername = await UserService.findByUsername(username);
            if (userFoundByUsername) {
                throw new Error(`username ${username} alredy exists`)
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const userSave = await UserService.create({
                username,
                email,
                password: hashedPassword,
            });
            const tokenData = await generateToken(userSave);
            return {
                token: tokenData,
            };
        } catch (error) {
            throw new Error(error)
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
            throw new Error(error);
        }
    }

    async refreshToken(user) {
        return generateToken(user);

    }

    async logout(authToken) {
        try {
            const isLogout = await destroyToken(authToken);
            if (!isLogout) throw new Error('is not logged out');
            return isLogout;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new AuthService();
