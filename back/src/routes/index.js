const { Router } = require('express');
const router = Router();

const noteRoutes = require('./note.routes');
const imageRoutes = require('./img.routes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const commentRoutes = require('./comment.routes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/note', noteRoutes);
router.use('/img', imageRoutes);
router.use('/img-comment', commentRoutes);

module.exports = router;
