const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ComentSchema = new Schema(
    {
        comment: { type: String, required: true },
        imgId: { type: Schema.Types.ObjectId, ref: 'Post' }, // rename=> postId
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        replyToId: [{ type: Schema.Types.ObjectId, ref: 'ReplyTo' }]
        // replyTo: { type: Schema.Types.ObjectId, ref: 'ReplyTo' },
    },
    {
        timestamps: {
            createdAt: 'created_at',
        },
    }, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
        },
    }
}
);

module.exports = model('Coment', ComentSchema);
