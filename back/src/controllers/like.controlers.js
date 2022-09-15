const { HttpStatus } = require('../config/httpStatus');
const ImageService = require('../services/image.service');
const LikeService = require('../services/like.service');

class LikeController {
	async addLike(req, res, next) {
		const { id } = req.params;
		try {
			const userId = req.user._id;
			const imgFound = await ImageService.findById(id);
			if (!imgFound) res.status(HttpStatus.NOT_FOUND).send('not found img');

			const imgUpdateLike = await LikeService.like(imgFound, userId);
			res.status(HttpStatus.OK).json(imgUpdateLike);
		} catch (error) {
			next(error);
		}
	}
}
module.exports = new LikeController();
