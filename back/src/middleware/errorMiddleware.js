const errorMiddleware = (err, req, res) => {
	res.status(err.status || 500);
	res.send({
		status: err.status || 500,
		message: err.message,
	});
};

module.exports = { errorMiddleware };
