const crltNote = {}

const Note = require('../models/Note')

crltNote.getNotes =async(req, res)=> {
    const notes = await Note.find().populate('userId')
    res.json(notes)
}

crltNote.createNote= async(req, res)=>{

    const note = await new Note(req.body)
    note.userId = req.user.id
    await note.save()
    res.json(note)
}

crltNote.getNoteById =async(req, res)=>{
    const note = await Note.findById(req.params.id)
    res.json(note)
}   

crltNote.updateNoteById =async(req, res)=>{
    console.log(req.user)
    const id = req.params.id
    const note = await Note.findById(id)
    console.log(note)
    //const note = await Note.findByIdAndUpdate(id, req.body)
   // console.log(note)
    res.json('update note')
}

crltNote.deleteNote =async(req, res)=>{
    const id = req.params.id
    const note = await Note.findByIdAndDelete(id)
    console.log(note)
    res.json('delete note by Id')
}


module.exports = crltNote
