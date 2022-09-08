const CommentSchema = require('../models/comment.schema');

class CommentService {
	async find() {
		return CommentSchema.find();
	}

	async findByIdImg() {
		res.json('get coment');
	}

	async findAllByIdImg(imgId) {
		return CommentSchema.find({ imgId })
			.populate('userId', { password: 0 })
			.sort({ createdAt: -1 });
	}
	/**
	 * It creates a new comment, saves it, then populates the userId field with the user's data, and then
	 * pushes the comment's id to the image's comments array.
	 * @param commentData - {
	 * @param image - is the image object that is being commented on
	 * @returns The comment that was created.
	 */

	async create(commentData, image) {
		console.log(commentData);
		console.log('image', image);
		const comment = new CommentSchema(commentData);
		const commentSave = await comment.save();
		const commentPopulateById = await CommentSchema.findById(
			commentSave._id
		).populate('userId', { password: 0 });

		if (commentSave) {
			image.comments.push(commentSave._id);
			await image.save();
		}
		console.log(commentPopulateById);
		return commentPopulateById;
	}

	async update(id, data) {
		res.json('update coment');
	}

	async delete(id) {
		res.json('delete coment');
	}
}

module.exports = new CommentService();

/* const createError = require('http-errors');
const ImgSchema = require('../models/img.schema');
const CommentSchema = require('../models/comment.schema');

class CommentController {
	async findByIdImg(req, res) {
		res.json('get coment');
	}

	async findAll(req, res) {
		// await ImgSchema.findById(req.params.id).populate("comments");
		const comment = await CommentSchema.find({ imgId: req.params.id })
			.populate('userId', { password: 0 })
			.sort({ createdAt: -1 });
		res.json(comment);
	}

	async create(req, res, next) {
		const img = await ImgSchema.findById(req.body.imgId);// searh img -- add comment
		if (!img) return next(createError(404, 'Img not found')); 

		const comment = new CommentSchema({
			comment: req.body.comment,
			imgId: req.body.imgId,
			userId: req.user._id,
		});
		const comentSave = await comment.save();
		// get comment with user
		const comentPopulate = await CommentSchema.findById(
			comentSave._id
		).populate('userId', { password: 0 });
		img.comments.push(comment._id);
		await img.save();
		res.json(comentPopulate);
	}

	async update(req, res) {
		res.json('update coment');
	}

	async delete(req, res, next) {
		res.json('delete coment');
	}
}

module.exports = new CommentController();

 */
