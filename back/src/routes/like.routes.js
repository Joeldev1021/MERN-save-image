const express = require('express');
const router = express.Router();

const verifyAuth = require('../middleware/verifyAuth');
const LikeController = require('../controller/like.controler');

router.post('/comment/:id', verifyAuth, LikeController.addLikeComment);
router.post('/reply/:id', verifyAuth, LikeController.addLikeReply);
router.post('/post/:id', verifyAuth, LikeController.addLikePost);

module.exports = router;
