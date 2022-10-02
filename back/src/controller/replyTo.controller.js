const { HttpStatus } = require('../config/httpStatus');
const CommentService = require('../services/comment.service');
const ReplyToService = require('../services/replyTo.service');


class ReplyToController {

    async findAll(req, res, next) {
        try {
            const foundReply = await ReplyToService.find();
            if (!foundReply)
                res.status(HttpStatus.NOT_FOUND).json('comments not found');
            res.status(HttpStatus.OK).json(foundReply);
        } catch (error) {
            next(error);
        }
    }

    async findById(req, res, next) {
        const foundReplys = await ReplyToService.findAll()
        res.send(foundReplys);
    }

    async create(req, res, next) {

        const { id } = req.params
        const userId = req.user._id
        const commentFound = await CommentService.findById(id);
        if (!commentFound) return res.status(HttpStatus.NOT_FOUND).json('not found')

        if (req.body) {
            const replyTo = {
                replyTo: req.body.replyTo,
                userId,
            }
            const commentReply = await ReplyToService.create(commentFound, replyTo)
            // const newReplyTo = new ReplyToSchema(replyTo)
            // commentFound.replyTo.push(userId)
            res.send(commentReply)
        }

    }

    async update(req, res, next) {
        const { id } = req.params
        const foundReply = await ReplyToService.update(id, req.body)
        res.send(foundReply)

    }


    async delete(req, res, next) {
        const { id } = req.params
        const deleteReply = await ReplyToService.delete(id)
        res.send(deleteReply)
    }


    async findCommentPopulate(req, res, next) {
        const findComent = await ReplyToService.findPopulateReply()
        res.send(findComent)
    }

}

module.exports = new ReplyToController();
