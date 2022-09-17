const { HttpStatus } = require('../config/httpStatus');
const CommentService = require('../services/comment.service');
const PostService = require('../services/post.service');
class CommentController {
    async find(req, res, next) {
        try {
            const foundComments = await CommentService.find();
            if (!foundComments)
                res.status(HttpStatus.NOT_FOUND).json('comments not found');
            res.status(HttpStatus.OK).json(foundComments);
        } catch (error) {
            next(error);
        }
    }

    async findByIdImage(req, res) {
        res.json('get comment');
    }

    async findAllByIdImage(req, res, next) {
        const { id } = req.params;
        try {
            const comment = await CommentService.findAllByIdImg(id);
            if (!comment)
                res.status(HttpStatus.NOT_FOUND).send('comment not found');

            res.status(200).json(comment);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        const { id } = req.params;

        try {
            if (!req.body.comment)
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(
                    'not comment'
                );

            const post = await PostService.findById(id);
            if (!post) res.status(HttpStatus.NOT_FOUND).send('Image not found');

            const comment = {
                comment: req.body.comment,
                imgId: id,
                userId: req.user._id,
            };
            const comments = await CommentService.create(comment, post);
            res.status(HttpStatus.OK).json(comments);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params;
            const commentUpdate = await CommentService.update(id, req.body);
            res.status(HttpStatus.OK).json(commentUpdate);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const commentDelete = await CommentService.delete(id);
            res.status(HttpStatus.OK).json(commentDelete);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CommentController();
