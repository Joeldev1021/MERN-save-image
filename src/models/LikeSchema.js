const mongoose = require('mongoose')
const {Schema,model} = mongoose



const LikeSchema = new Schema({
    like: { type: String, required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imgId: { type: mongoose.Schema.Types.ObjectId, ref: "Img", required: true },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment"}
});


module.exports = model('Like', LikeSchema)