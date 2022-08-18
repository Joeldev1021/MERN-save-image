const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/verifyToken');
const NoteController = require('../controllers/note.controllers');

router.get('/all', NoteController.findAll);

router.get('/', verifyToken, NoteController.findNotesByUserId);

router.post('/add', verifyToken, NoteController.create);

router.get('/:id', NoteController.findById);

router.put('/edite/:id', verifyToken, NoteController.update);

router.delete('/delete/:id', verifyToken, NoteController.delete);

module.exports = router;
