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

	async findAllByIdImage(req, res, next) {
		const { id } = req.params;
		try {
			const comment = await CommentService.findAllByIdImg(id);
			if (!comment) throw new Error('image not found');

			res.status(200).json(comment);
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		const { id } = req.params;
		console.log('body', req.body);

		try {
			if (!req.body.comment)
				res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('not comment');

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
			next(error);
		}
	}

	async update(req, res, next) {
		try {
			const { id } = req.params;
			console.log(req.body);
			const commentUpdate = await CommentService.update(id, req.body);
			res.json(commentUpdate);
		} catch (error) {
			next(error);
		}
	}

	async delete(req, res, next) {
		res.json('delete coment');
	}
}

module.exports = new CommentController();
