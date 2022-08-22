const createError = require('http-errors');
const ImgSchema = require('../models/img.schema');
const CommentSchema = require('../models/comment.schema');
const { HttpStatus } = require('../config/httpStatus');
const CommentService = require('../services/comment.service');
const ImageService = require('../services/image.service');
class CommentController {
	async find(req, res) {
		try {
			const foundComments = await CommentService.find();
			if (!foundComments)
				res.status(HttpStatus.NOT_FOUND).json('comments not found');
			res.status(HttpStatus.OK).json(foundComments);
		} catch (error) {
			throw new Error(error);
		}
	}

	async findByIdImage(req, res) {
		res.json('get comment');
	}

	async findAllByIdImage(req, res) {
		const { id } = req.params;
		console.log('hola', id);
		try {
			const comment = await CommentService.findAllByIdImg(id);
			res.status(200).json(comment);
		} catch (error) {
			throw new Error(error.message);
		}
	}

	async create(req, res, next) {
		const { id } = req.params;

		try {
			const image = await ImageService.findById(id);
			if (!image) res.status(HttpStatus.NOT_FOUND).send('Img not found');

			const comment = {
				comment: req.body.comment,
				imgId: id,
				userId: req.user._id,
			};

			const comments = await CommentService.create(comment, image);

			res.status(HttpStatus.OK).json(comments);
		} catch (error) {
			throw new Error(error);
		}
	}

	async update(req, res) {
		res.json('update coment');
	}

	async delete(req, res, next) {
		res.json('delete coment');
	}
}

module.exports = new CommentController();
