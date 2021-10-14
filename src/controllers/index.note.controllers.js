const crltNote = {};

const Note = require("../models/Note");
const createError = require("http-errors");

crltNote.getNotes = async (req, res) => {
//   const notes = await Note.find() .populate("userId");
  
  const notes = await Note.find({ userId: req.user.id})
  res.json(notes);
};

crltNote.createNote = async (req, res) => {
    try {
      const note = await new Note(req.body);
      note.userId = req.user.id
      await note.save();
      res.json(note);
    } catch (error) {
        console.log(error)
    } 
};

crltNote.getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

crltNote.updateNoteById = async (req, res, next) => {
  const id = req.params.id;
   try {
    const noteUpdate = await Note.findByIdAndUpdate(id, req.body);
    if(!noteUpdate) throw createError.NotFound('note not found')
    return res.json(noteUpdate);
   } catch (error) {
     next(error)
   }
   
};

crltNote.deleteNote = async (req, res, next) => {
  const id = req.params.id;
  try {
        const noteDelete = await Note.findByIdAndDelete(id);
        if(!noteDelete) throw createError.NotFound('note not found')
        return res.json(noteDelete);
        
  } catch (error) {
      next(error)
  }

};

module.exports = crltNote;
