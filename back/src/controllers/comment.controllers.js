const createError = require('http-errors');
const ImgSchema = require('../models/img.schema');
const CommentSchema = require('../models/comment.schema');

class CommentController {
	async getComentByImg(req, res) {
		res.json('get coment');
	}

	async getAllComent(req, res) {
		// await ImgSchema.findById(req.params.id).populate("comments");
		const comment = await CommentSchema.find({ imgId: req.params.id })
			.populate('userId', { password: 0 })
			.sort({ createdAt: -1 });
		res.json(comment);
	}

	async addComment(req, res, next) {
		const img = await ImgSchema.findById(req.body.imgId);
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

	async updateComentById(req, res) {
		res.json('update coment');
	}

	async deleteComent(req, res, next) {
		res.json('delete coment');
	}
}

module.exports = new CommentController();
