const { HttpStatus } = require('../config/httpStatus');
const PostService = require('../services/post.service');
const LikeService = require('../services/like.service');
const commentService = require('../services/comment.service');

class LikeController {
    async addLikePost(req, res, next) {
        const { id } = req.params;
        try {
            const userId = req.user._id;
            const postFound = await PostService.findById(id);
            if (!postFound)
                res.status(HttpStatus.NOT_FOUND).send('not found img');

            const postUpdateLike = await LikeService.likePost(
                postFound,
                userId
            );
            res.status(HttpStatus.OK).json(postUpdateLike);
        } catch (error) {
            next(error);
        }
    }

    async addLikeComment(req, res, next) {
        const { id } = req.params;
        try {
            const userId = req.user._id;
            const foundComment = await commentService.findById(id);
            if (!foundComment)
                res.status(HttpStatus.NOT_FOUND).send(
                    'not found comment by id'
                );
            const likeComment = await LikeService.likeComment(
                foundComment,
                userId
            );
            res.status(HttpStatus.OK).json(likeComment);
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new LikeController();
