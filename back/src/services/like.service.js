class LikeService {
	async like(img, userId) {
		if (!img.likes.includes(userId)) {
			img.likes = img.likes.concat(userId);
		} else {
			img.likes = img.likes.filter(
				like => like.toString() !== userId.toString()
			);
		}
		return await img.save();
	}
}

module.exports = new LikeService();
