const createError = require('http-errors');
const ImgSchema = require('../models/img.schema');

class LikeController {
	async addLike(req, res, next) {
		const { id } = req.params;
		try {
			if (!id) throw createError.NotFound('not found img');
			const img = await ImgSchema.findById(id);

			if (img) {
				if (!img.likes.includes(req.user._id)) {
					img.likes = img.likes.concat(req.user._id);
					await img.save();
				} else {
					img.likes = img.likes.filter(
						like => like.toString() !== req.user._id.toString()
					);
					await img.save();
				}
				res.json(img);
			}
		} catch (error) {
			next(error);
		}
	}
}
module.exports = new LikeController();
