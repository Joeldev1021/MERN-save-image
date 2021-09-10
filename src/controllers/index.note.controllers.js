const crltNote = {}

const Note = require('../models/Note')

crltNote.getNotes =async(req, res)=>{
    const notes = await Note.find()
    console.log(notes)
    res.json(notes)
}

crltNote.createNote= async(req, res)=>{
    const note = await new Note(req.body)
    await note.save()
    res.json('create Notes')
}

crltNote.getNoteById =async(req, res)=>{
    const note = await Note.findById(req.params.id)
    res.json(note)
}   

crltNote.updateNoteById =async(req, res)=>{
    const id = req.params.id
    const note = await Note.findByIdAndUpdate(id, req.body)
    console.log(note)
    res.json('update Note by Id')
}

crltNote.deleteNote =async(req, res)=>{
    const id = req.params.id
    const note = await Note.findByIdAndDelete(id)
    console.log(note)
    res.json('delete note by Id')
}


module.exports = crltNote
