const { Router } = require('express');
const router = Router();

const noteRoutes = require('./note.routes');
const imageRoutes = require('./img.routes');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');

router.use('/note', noteRoutes);
router.use('/img', imageRoutes);
router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;
