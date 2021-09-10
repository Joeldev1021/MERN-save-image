const crltNote = {}

crltNote.getNotes =(req, res)=>{
    res.json('new Notes')
}

crltNote.createNote =(req, res)=>{
    res.json('create Notes')
}
crltNote.getNoteById =(req, res)=>{
    res.json('get notes by Id')
}   

crltNote.updateNoteById =(req, res)=>{
    res.json('update Note by Id')
}

crltNote.deleteNote =(req, res)=>{
    res.json('delete note by Id')
}


module.exports = crltNote
