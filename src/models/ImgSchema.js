const mongoose = require('mongoose')
const {Schema,model} = mongoose


const ImgSchema = new Schema({
    title: String,
    description:String,
    imgUrl: String,
    userId: { type: Schema.ObjectId, ref: "User" },
    
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = model('Img', ImgSchema)