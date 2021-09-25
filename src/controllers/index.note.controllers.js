const crltNote = {};

const Note = require("../models/Note");

crltNote.getNotes = async (req, res) => {
//   const notes = await Note.find() .populate("userId");
  const notes = await Note.find()
  res.json(notes);
};

crltNote.createNote = async (req, res) => {
  console.log(req.body);
  
    try {
      const note = await new Note(req.body);
      // note.userId = req.user.id
      console.log(note);
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

crltNote.updateNoteById = async (req, res) => {
  const id = req.params.id;
  const note = await Note.findById(id);
  console.log(req.body)
//   if (req.user.id == note.userId) {
if(note){
    const noteUpdate = await Note.findByIdAndUpdate(id, req.body);
    return res.json("update note");
  } else {
    res.json("note not found");
  }
};

crltNote.deleteNote = async (req, res) => {
  const id = req.params.id;
  try {
    const note = await Note.findById(id);
    //   if (req.user.id == note.userId) {
       if(note){
        const noteDelete = await Note.findByIdAndDelete(id);
        return res.json("delete note");
      } else {
        res.json("note not found");
      }
  } catch (error) {
      
      console.log(error)
  }

};

module.exports = crltNote;
