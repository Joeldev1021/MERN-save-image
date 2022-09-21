const Post = require('../models/post.schema');

class PostService {
    async findAll() {
        return Post.find().populate('userId', {
            password: 0,
        });
    }

    async findById(id) {
        return Post.findById(id);
    }

    async findByUserId({ userId }) {
        return Post.find({ userId });
    }

    async create(post) {
        const newPost = new Post(post);
        return newPost.save();
    }

    async update(id, data) {
        return Post.findByIdAndUpdate(id, data);
    }

    async delete(id) {
        return Post.findByIdAndDelete(id);
    }
}

module.exports = new PostService();
