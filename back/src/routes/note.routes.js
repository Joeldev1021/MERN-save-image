const express = require('express');
const router = express.Router();

const verifyAuth = require('../middleware/verifyAuth');
const NoteController = require('../controllers/note.controllers');

router.get('/all', NoteController.findAll);

router.get('/', verifyAuth, NoteController.findNotesByUserId);

router.post('/add', verifyAuth, NoteController.create);

router.get('/:id', NoteController.findById);

router.put('/edite/:id', verifyAuth, NoteController.update);

router.delete('/delete/:id', verifyAuth, NoteController.delete);

module.exports = router;
