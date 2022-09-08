const fs = require('fs');
const { HttpStatus } = require('../config/httpStatus');
const { cloudinaryAdd, cloudinaryDelete } = require('../helper/cloudinary');
const { isValidHttpUrlImage } = require('../helper/isValidHttpUrl');
const ImageService = require('../services/image.service');

// Schema Image

class ImageController {
	// find all image
	async findAll(req, res, next) {
		try {
			const images = await ImageService.findAll();
			if (!images) res.status(HttpStatus.NOT_FOUND).send('Images not found');

			return res.status(HttpStatus.OK).json(images);
		} catch (error) {
			next(error);
		}
	}

	async findById(req, res, next) {
		const { id } = req.params;
		try {
			const img = await ImageService.findById(id);

			if (!img)
				res.status(HttpStatus.NOT_FOUND).send(`image find id ${id}, not found`);
			return res.json(img);
		} catch (error) {
			next(error);
		}
	}

	// get img by id user
	async findByUserId(req, res, next) {
		const { id } = req.user;
		try {
			const images = await ImageService.findByUserId({ userId: id });
			if (!images)
				res
					.status(HttpStatus.NOT_FOUND)
					.send('images by user ID' + id + 'not found');
			res.status(HttpStatus.OK).json(images);
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			if (!req.files && !req.body.imgUrl)
				res.status(HttpStatus.NO_CONTENT).send('not provided image');
			if (!req.body.title || !req.body.description)
				res.status(HttpStatus.NO_CONTENT).send('fill required ');

			let imgCloud;

			if (req.files) {
				imgCloud = await cloudinaryAdd(req.files.image.tempFilePath);
				if (!imgCloud)
					res
						.status(HttpStatus.INTERNAL_SERVER_ERROR)
						.send('error save image to cloudinary');
			}
			/**
			 * validate if url is valid
			 */
			if (req.body.imgUrl) {
				if (isValidHttpUrlImage(req.body.imgUrl))
					res.status(HttpStatus.NO_CONTENT).send('url is not valid');
			}

			const image = {
				title: req.body.title,
				description: req.body.description,
				userId: req.user._id,
				imgUrl: imgCloud.url ? imgCloud.url : req.body.imgUrl,
			};
			const imgSave = await ImageService.create(image);
			await fs.unlink(req.files.image.tempFilePath, () =>
				console.log('deleted files')
			);
			res.status(HttpStatus.OK).json(imgSave);
		} catch (error) {
			next(error);
		}
	}

	async update(req, res, next) {
		const { id } = req.params;
		const { title, description } = req.body;
		try {
			if (!title || !description)
				res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('fill required');
			const findImage = await ImageService.findById(id);
			if (!findImage) res.status(HttpStatus.NOT_FOUND).send('image not found');
			if (findImage.userId !== req.user._id)
				res.status(HttpStatus.UNAUTHORIZED).send('not authorizated');

			const imgUpdate = await ImageService.update(id, req.body);
			if (!imgUpdate)
				res.status(HttpStatus.BAD_REQUEST).send('image not updated');

			return res.status(HttpStatus.OK).json(req.body);
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		const { id } = req.params;
		try {
			const image = await ImageService.delete(id);
			if (!image) res.status(HttpStatus.NOT_FOUND).send('image not found');
			// cut url
			const imgCut = image.imgUrl.split('/')[7].split('.')[0];
			await cloudinaryDelete(imgCut); // delete img cloudinary

			return res.status(HttpStatus.OK).json(img);
		} catch (error) {
			next(error)
		}
	}
}

module.exports = new ImageController();
