const fileUpload = require('express-fileupload');

const fileUploadImage = fileUpload({
	useTempFiles: true,
	tempFileDir: './src/tmp/',
});

module.exports = { fileUploadImage };
