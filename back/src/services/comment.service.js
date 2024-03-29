const CommentSchema = require('../models/comment.schema');

class CommentService {
    async find() {
        return CommentSchema.find();
    }

    async findById(id) {
        return CommentSchema.findById(id);
    }

    async findAllByIdImg(imgId) {
        /*       return CommentSchema.find({ imgId })
                   .populate('userId', { password: 0 })
                   .sort({ createdAt: -1 });
         */
        return CommentSchema.find({ imgId }).populate([{
            path: 'userId',
            select: ['username', 'avatar']

        }, {
            path: 'replyToId',
            populate: {
                path: 'userId',
                select: ['username', 'avatar']
            }
        }]);
    }
    /**
     * It creates a new comment, saves it, then populates the userId field with the user's data, and then
     * pushes the comment's id to the image's comments array.
     * @param commentData - {
     * @param image - is the image object that is being commented on
     * @returns The comment that was created.
     */

    async create(commentData, image) {
        const comment = new CommentSchema(commentData);
        const commentSave = await comment.save();
        const commentPopulateById = await CommentSchema.findById(
            commentSave._id
        ).populate('userId', { password: 0 });

        if (commentSave) {
            image.comments.push(commentSave._id);
            await image.save();
        }
        return commentPopulateById;
    }

    async update(id, data) {
        return CommentSchema.findByIdAndUpdate(id, data).populate('userId', {
            password: 0,
        });
    }

    async delete(id) {
        return CommentSchema.findByIdAndDelete(id);

    }

    async getCommentPopulate(id, value) {
        return CommentSchema.findById(id).populate(value, { password: 0 });
    }

    async getCommentPopulateByReply(idComment) {
        return CommentSchema.findById(idComment).populate([{
            path: 'replyToId',
            populate: {
                path: 'userId',
                select: ['username', 'avatar']
            }
        }]);
    }

    async getCommentPopulateAux(idComment) {
        return CommentSchema.findById("61951550eb99ce160cc3cd15").populate([{
            path: 'replyToId',
            populate: {
                path: 'userId',
                select: ['username', 'avatar']
            }
        }]);
    }
}

module.exports = new CommentService();
