const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        imgUrl: String,
        likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        comments: [{ type: Schema.Types.ObjectId, ref: 'Coment' }],
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: {
            createdAt: 'created_at',
        },
    }
);

module.exports = model('Img', PostSchema); // img => post
