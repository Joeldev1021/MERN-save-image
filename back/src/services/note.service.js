const Note = require("../models/note.schema");
class NoteService {
  async findAllNotes () {
    try {
      return await Note.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findNoteById (id) {
    try {
      return await Note.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findNoteByUserId (userId) {
    console.log(userId);
  }

  async createNote (data) {
    try {
      return await new Note(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteNoteById (id) {
    try {
      return await Note.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateNoteById (id, data) {
    try {
      return await Note.findByIdAndUpdate(id, data);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new NoteService();
