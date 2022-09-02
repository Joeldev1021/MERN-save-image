const jwt = require('jsonwebtoken');

const generateToken = async user => {
	return await jwt.sign({ id: user._id }, process.env.SECRET_TOKEN_KEY, {
		expiresIn: '1d',
	});
};

const destroyToken = async authToken => {
	return jwt.sign({ authToken }, 'logout', { expiresIn: 1 });
};

module.exports = { generateToken, destroyToken };
