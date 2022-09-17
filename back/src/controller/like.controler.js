const { HttpStatus } = require('../config/httpStatus');
const PostService = require('../services/post.service');
const LikeService = require('../services/like.service');

class LikeController {
    async addLike(req, res, next) {
        const { id } = req.params;
        try {
            const userId = req.user._id;
            const postFound = await PostService.findById(id);
            if (!postFound)
                res.status(HttpStatus.NOT_FOUND).send('not found img');

            const postUpdateLike = await LikeService.like(postFound, userId);
            res.status(HttpStatus.OK).json(postUpdateLike);
        } catch (error) {
            next(error);
        }
    }
}
module.exports = new LikeController();
