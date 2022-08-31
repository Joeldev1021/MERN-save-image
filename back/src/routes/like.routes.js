const express = require('express');
const router = express.Router();

const verifyAuth = require('../middleware/verifyAuth');
const LikeController = require('../controllers/like.controllers');

router.post('/img/like/add/:id', verifyAuth, LikeController.addLike);

module.exports = router;
