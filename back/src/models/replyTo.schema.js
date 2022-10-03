const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ReplyToSchema = new Schema(
    {
        comment: { type: String, required: true },
        // imgId: { type: Schema.Types.ObjectId, ref: 'Post' }, // rename=> postId
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        commentId: { type: Schema.Types.ObjectId, ref: 'Comment' }
        // replyTo: { type: Schema.Types.ObjectId, ref: 'ReplyTo' },
    },
    {
        timestamps: {
            createdAt: 'created_at',
        },
        versionKey: false,
    }
);

module.exports = model('ReplyTo', ReplyToSchema);

