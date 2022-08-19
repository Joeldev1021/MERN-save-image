const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const CommentControllers = require('../controllers/comment.controllers');

const router = express.Router();

router.get('/', CommentControllers.find);

router.get('/:id', verifyToken, CommentControllers.findByIdImage);

router.get('/all/:id', verifyToken, CommentControllers.findAllByIdImage);

router.post('/add-comment/:id', verifyToken, CommentControllers.create); // id -> idImg

router.put('/edit-comment/:id', verifyToken, CommentControllers.update);

router.delete(
	'/img/comment/delete/:id',
	verifyToken,
	CommentControllers.delete
);

module.exports = router;
