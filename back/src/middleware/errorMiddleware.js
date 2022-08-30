const errorMiddleware = (err, req, res, next) => {
	return res.status(err.status || 500).send({
		errorMessage: err.message,
	});
	next();
};

module.exports = { errorMiddleware };
