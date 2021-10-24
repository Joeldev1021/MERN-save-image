const mongoose = require('mongoose')
const {Schema,model} = mongoose



const likeSchema = new Schema({
    content: { type: String, required: false },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Img", required: function() { return this.commentId? false : true } },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment", required: function() { return this.postId? false : true } }
});


module.exports = model('Like', LikeSchema)