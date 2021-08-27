const mongoose = require('mongoose')
const {Schema,model} = mongoose


const ImgSchema = new Schema({
    title: String,
    description:String,
    originalname: String,
    path: String,
    filename: String,
    imgExtname: String,
    //path.extname(filename)
    UserId: { type: Schema.ObjectId, ref: "UserSchema" }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

module.exports = model('ImgSchema', ImgSchema)