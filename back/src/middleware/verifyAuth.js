const jwt = require('jsonwebtoken');
const { HttpStatus } = require('../config/httpStatus');
const User = require('../models/user.schema');

const veryAuth = async (req, res, next) => {
	const token = req.headers.authorization;
	try {
		if (!token) throw new Error('token no provided');
		const userId = jwt.verify(token, process.env.SECRET_TOKEN_KEY);
		const user = await User.findById(userId.id, { password: 0 });
		if (!user) throw new Error('token invalid or expired');
		req.user = user;
		next();
	} catch (error) {
		res.status(HttpStatus.UNAUTHORIZED).json({ error: error.message });
	}
};

module.exports = veryAuth;
