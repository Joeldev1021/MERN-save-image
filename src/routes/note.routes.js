const express = require('express')
const router = express.Router()

const {getNotes, getNoteById, updateNoteById, deleteNote, createNote} = require('../controllers/index.note.controllers')

router.get('/note', getNotes)

router.post('/note/add', createNote)

router.get('/note/:id', getNoteById)

router.put('/note/:id', updateNoteById)

router.delete('/note/:id', deleteNote)

module.exports = router
