const { Router } = require('express');
const router = Router();

const postRoutes = require('./post.routes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const commentRoutes = require('./comment.routes');
const replyToRoutes = require('./replyTo.routes');
const likeRoutes = require('./like.routes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/post-comment', commentRoutes);
router.use('/post-like', likeRoutes);
router.use('/replyTo', replyToRoutes);
router.use('/reply-like', likeRoutes);
router.get('/', (req, res) => {
    res.send('hello word')
})

module.exports = router;
