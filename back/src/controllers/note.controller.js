const Note = require("../models/note.schema");
const createError = require("http-errors");

const NoteService = require("../services/note.service");

class NotesController {
  async getNotesByUserId (req, res) {
    try {
      const notes = await Note.find({ userId: req.user.id });
      if (!notes) throw createError.NotFound("notes not found");
      res.json(notes);
    } catch (error) {
      throw new Error(error);
    }
  };

  async getNotesAll (req, res, next) {
    try {
      const notes = await NoteService.findAllNotes();
      if (!notes) res.status(404).json({ message: "notes not found" });
      res.json({
        message: "get all notes success",
        notes
      });
    } catch (error) {
      console.log(error);
    }
  };

  async createNote (req, res, next) {
    try {
      const note = await new Note(req.body);
      if (!note) throw createError.BadRequest("image is not created");
      note.userId = req.user.id;
      await note.save();
      res.json(note);
    } catch (error) {
      next(error);
    }
  };

  async getNoteById (req, res) {
    try {
      const note = await NoteService.findNoteById(req.params.id);
      if (!note) {
        return res.status(404).json({
          message: "note not found"
        });
      }
      res.json(note);
    } catch (error) {
      console.log(error);
    }
  };

  async updateNoteById (req, res, next) {
    const id = req.params.id;
    try {
      const noteUpdate = await Note.findByIdAndUpdate(id, req.body);
      if (!noteUpdate) throw createError.NotFound("note not found");
      return res.json(noteUpdate);
    } catch (error) {
      next(error);
    }
  };

  async deleteNote (req, res, next) {
    const id = req.params.id;
    try {
      const noteDelete = await Note.findByIdAndDelete(id);
      if (!noteDelete) throw createError.NotFound("note not deleted");
      return res.json(noteDelete);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new NotesController();
