const CommentSchema = require("../models/comment.schema")
const ReplyToSchema = require("../models/replyTo.schema")
const CommentService = require("./comment.service")

class ReplyToService {
    async findById(id) {
        return ReplyToSchema.findById(id)
    }

    async findAll() {
        return ReplyToSchema.find()
    }


    async create(comment, replyTo) {
        const newReply = new ReplyToSchema(replyTo)
        await newReply.save()
        comment.replyToId.push(newReply._id)
        await comment.save()
        const commentPopulateReply = await CommentService.getCommentPopulate(comment._id, 'replyToId')
        return commentPopulateReply
    }

    async findPopulateReply() {
        /* Populating the replyToId field of the comment with the userId field of the replyToId. */
        return CommentSchema.findById('61b5227d9f17b3964c539849').populate({
            path: 'replyToId',
            populate: {
                path: 'userId',
                select: ['username', 'avatar']
            }
        })
    }

    async update(id, data) {
        return ReplyToSchema.findOneAndUpdate(id, data)
    }

    async delete(id) {
        return ReplyToSchema.findByIdAndDelete(id)
    }
}


module.exports = new ReplyToService()