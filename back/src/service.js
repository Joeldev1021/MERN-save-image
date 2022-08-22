const mongoose = require('mongoose');

const { API_URI, API_URI_TEST, NODE_ENV } = process.env;

const API_URL = NODE_ENV === 'test' ? API_URI_TEST : API_URI;
mongoose
	.connect(API_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => console.log('conect db to mongodb'))
	.catch(err => console.log(err));

process.on('uncaughtException', async () => {
	mongoose.disconnect();
});

module.exports = mongoose;
