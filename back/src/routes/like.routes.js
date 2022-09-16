const express = require('express');
const router = express.Router();

const verifyAuth = require('../middleware/verifyAuth');
const LikeController = require('../controller/like.controler');

router.post('/:id', verifyAuth, LikeController.addLike);

module.exports = router;
