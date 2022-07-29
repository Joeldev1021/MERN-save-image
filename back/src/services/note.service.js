const Note = require("../models/note.schema");
class NoteService {
  async findAll () {
    try {
      return await Note.find();
    } catch (error) {
      throw new Error("Erro getting all Notes");
    }
  }

  async findById (id) {
    try {
      return await Note.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findNoteByUserId (userId) {
    try {
      return await Note.findByUserId({ userId });
    } catch (error) {
      throw new Error("Erro getting notes by user", userId);
    }
  }

  async createNote (data) {
    try {
      const newNote = await new Note(data);
      return await newNote.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete (id) {
    try {
      return await Note.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update (id, data) {
    try {
      return await Note.findByIdAndUpdate(id, data);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new NoteService();
