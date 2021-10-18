const mongoose = require('mongoose')
const {Schema,model} = mongoose


const LikeSchema = new Schema({
    like: Boolean,
    imgId : { type: Schema.ObjectId, ref: "Img" },
    userId: { type: Schema.ObjectId, ref: "User" }
})

module.exports = model('img', LikeSchema)