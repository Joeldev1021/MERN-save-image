const { HttpStatus } = require('../config/httpStatus');
const AuthService = require('../services/auth.service');

class AuthController {
    async register(req, res, next) {
        const { username, email, password, ...rest } = req.body
        try {
            if (!username && !password && !email) {
                throw new Error('missing username or password or email')
            }
            if (Object.keys(rest).length > 0) {
                throw new Error('unnecessary fields ')
            }
            const responseUser = await AuthService.register(username, email, password);
            if (responseUser) {
                res.status(200).send({
                    token: responseUser.token,
                });
            }
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password)
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(
                    'fill in email and password'
                );
            const response = await AuthService.login({ email, password });
            res.status(200).json({
                token: response,
            });
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        const authToken = req.headers.authorization;
        try {
            const response = await AuthService.logout(authToken);
            /* this token duration 1s */
            return res.status(200).send({ token: response });
        } catch (error) {
            next(error);
        }
    }

    async refreshToken(req, res, next) {
        try {
            const user = req.user
            const refreshToken = await AuthService.refreshToken(user);
            res.status(200).send({ token: refreshToken });

        } catch (error) {
            next(error)
        }
    }

}

module.exports = new AuthController();
