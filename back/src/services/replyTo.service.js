const ReplyToSchema = require("../models/replyTo.schema")

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
        /* const commentPopulateReply = await CommentService.getCommentPopulateByReply(comment._id)
        return commentPopulateReply */
        return ReplyToSchema.findById(newReply._id).populate({
            path: "userId",
            select: ["username", "avatar"]
        })
    }

    async findPopulateReply() {
        /* Populating the replyToId field of the comment with the userId field of the replyToId. */
        return ReplyToSchema.findById('633c33c89737ee6185cc88b5').populate({
            path: 'userId',
            select: ['username', 'avatar']

        })
        // return CommentService.getCommentPopulateByReply('6195140618144b6604eff0c7')
    }

    async update(id, data) {
        return ReplyToSchema.findOneAndUpdate(id, data)
    }

    async delete(id) {
        return ReplyToSchema.findByIdAndDelete(id)
    }
}


module.exports = new ReplyToService()