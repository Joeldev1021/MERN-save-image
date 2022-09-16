const express = require('express');
const router = express.Router();

const verifyAuth = require('../middleware/verifyAuth');
const PostController = require('../controller/post.controller');

router.get('/', verifyAuth, PostController.findByUserId);

router.get('/all', PostController.findAll);

router.post('/upload', verifyAuth, PostController.create);

router.get('/:id', verifyAuth, PostController.findById);

router.put('/:id', verifyAuth, PostController.update);

router.delete('/:id', verifyAuth, PostController.delete);

module.exports = router;
