const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryAdd = async img => {
	try {
		return cloudinary.uploader.upload(img);
	} catch (error) {
		console.log(error);
	}
};

const cloudinaryDelete = async img => {
	try {
		return cloudinary.uploader.destroy(img);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { cloudinaryAdd, cloudinaryDelete };
