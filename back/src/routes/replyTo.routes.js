const express = require('express');
const verifyAuth = require('../middleware/verifyAuth');
const ReplyToController = require('../controller/replyTo.controller')

const router = express.Router();

router.get('/find-populate', ReplyToController.findCommentPopulate);

router.get('/', ReplyToController.findAll);

router.get('/:id', ReplyToController.findById)


router.post('/add-replyTo/:id', verifyAuth, ReplyToController.create);

router.put('/:id', verifyAuth, ReplyToController.update);

router.delete('/:id', verifyAuth, ReplyToController.delete);


module.exports = router;