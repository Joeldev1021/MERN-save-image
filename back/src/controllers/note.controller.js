const NoteService = require("../services/note.service");

class NotesController {
  async getNotesByUserId (req, res) {
    const notes = await NoteService.findByUserId({ userId: req.user.id });
    if (!notes) throw new Error("notes not found");
    res.status(200).json(notes);
  };

  async getNotesAll (req, res) {
    const notes = await NoteService.findAllNotes();
    if (!notes)res.status(400).json({ message: "notes not found" });

    res.status(200).json({
      message: "get all notes successfully",
      notes
    });
  };

  async createNote (req, res) {
    const note = await NoteService.createNote(req.body);
    if (!note) res.status(400).json({ message: "note not created" });
    note.userId = req.user.id;
    res.status(200).json({ massage: "create note successfully", note });
  }

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
    const { id } = req.params;
    const noteUpdate = await NoteService.updateNoteById(id, req.body);

    if (!noteUpdate) res.status(404).json({ message: "note not updated" });

    return res.json({
      message: "note updated successfully",
      noteUpdate
    });
  };

  async deleteNote (req, res, next) {
    const { id } = req.params;
    const noteDelete = await NoteService.deleteNoteById(id);
    if (!noteDelete) res.json({ message: "note not deleted " });
    return res.json({
      message: "note deleted successfully",
      noteDelete
    });
  };
}

module.exports = new NotesController();
