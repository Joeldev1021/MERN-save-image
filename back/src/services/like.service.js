class LikeService {
    async likePost(img, userId) {
        if (!img.likes.includes(userId)) {
            img.likes = img.likes.concat(userId);
        } else {
            img.likes = img.likes.filter(
                (like) => like.toString() !== userId.toString()
            );
        }
        return await img.save();
    }

    async likeComment(comment, userId) {
        if (!comment.likes.includes(userId)) {
            comment.likes = comment.likes.concat(userId);
        } else {
            comment.likes = comment.likes.filter(
                (like) => like.toString() !== userId.toString()
            );
        }
        return await comment.save();
    }
}

module.exports = new LikeService();
