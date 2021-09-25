const express = require('express')
const router = express.Router()
//
const verifyToken = require('../middleware/verifyToken')

const {getNotes, getNoteById, updateNoteById, deleteNote, createNote} = require('../controllers/index.note.controllers')

router.get('/note', getNotes)

router.post('/note/add', createNote)

router.get('/note/:id', getNoteById)

router.put('/note/edite/:id', updateNoteById)

router.delete('/note/delete/:id', deleteNote)

module.exports = router
