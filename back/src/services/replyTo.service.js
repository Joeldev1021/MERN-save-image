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
        console.log('create')
        const newReply = new ReplyToSchema(replyTo)
        await newReply.save()
        comment.replyToId.push(newReply._id)
        await comment.save()
        const commentPopulateReply = await CommentService.findById(comment._id)
        return commentPopulateReply
    }

    async findPopulateReply() {
        console.log('hola')
        // const findReply = await ReplyToSchema.findById("63385e9f0a7ad354291bb6c1").populate('commentId')
        const findComment = await CommentSchema.findById('6195150f4163965718ce6184').populate('replyToId')
        console.log('findComment', findComment)
        //        console.log(findReply)
        // replyID =63385e9f0a7ad354291bb6c1
        // user 614520a2b9f7762db09b1393
    }

    async update(id, data) {
        return ReplyToSchema.findOneAndUpdate(id, data)
    }

    async delete(id) {
        return ReplyToSchema.findByIdAndDelete(id)
    }
}


module.exports = new ReplyToService()