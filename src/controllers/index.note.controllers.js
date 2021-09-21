const crltNote = {}

const Note = require('../models/Note')

crltNote.getNotes =async(req, res)=> {
    const notes = await Note.find().populate('userId')
    res.json(notes)
}

crltNote.createNote= async(req, res)=>{
    console.log(req.body)
    if(req.body.title){
        const note = await new Note(req.body)
        note.userId = req.user.id
        await note.save()
        res.json(note)
    }
    res.json('required fields')

}

crltNote.getNoteById =async(req, res)=>{
    const note = await Note.findById(req.params.id)
    res.json(note)
}   

crltNote.updateNoteById =async(req, res)=>{
    console.log(req.user)
    const id = req.params.id
    const note = await Note.findById(id)
    if(req.user.id == note.userId){
        const noteUpdate = await Note.findByIdAndUpdate(id, req.body)
       return res.json('update note')
    }else {
        res.json('note not found')
    }
  
}

crltNote.deleteNote =async(req, res)=>{
    const id = req.params.id
    const note = await Note.findById(id)
    if(req.user.id == note.userId){
        const noteDelete = await Note.findByIdAndDelete(id)
       return res.json('delete note')
    }else {
        res.json('note not found')
    }
  
}

module.exports = crltNote
