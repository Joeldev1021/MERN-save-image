const errorMiddleware = (err, req, res, next) => {
	res.status(err.status || 500);
	res.send({
		errorMessage: err.message,
	});
	next();
};

module.exports = { errorMiddleware };
