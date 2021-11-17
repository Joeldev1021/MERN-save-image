const mongoose = require('mongoose')
const {Schema,model} = mongoose


const ImgSchema = new Schema({
    title: String,
    description:String,
    imgUrl: String,
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Coment' }],
    userId: { type: Schema.ObjectId, ref: "User" },
    //user post img
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = model('Img', ImgSchema)