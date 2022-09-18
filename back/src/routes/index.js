const { Router } = require('express');
const router = Router();

const postRoutes = require('./post.routes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const commentRoutes = require('./comment.routes');
const LikeRotes = require('./like.routes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/post-comment', commentRoutes);
router.use('/post-like', LikeRotes);

module.exports = router;
