const express = require('express');
const verifyAuth = require('../middleware/verifyAuth');
const CommentControllers = require('../controller/comment.controller');

const router = express.Router();

router.get('/', CommentControllers.find);

router.get('/all/:id', verifyAuth, CommentControllers.findAllByIdImage); // verifyAuth

router.post('/add-comment/:id', verifyAuth, CommentControllers.create); // id -> idImg

router.put('/update-comment/:id', verifyAuth, CommentControllers.update);

router.delete('/delete-comment/:id', verifyAuth, CommentControllers.delete);

router.get('/:id', verifyAuth, CommentControllers.findByIdImage);

module.exports = router;
