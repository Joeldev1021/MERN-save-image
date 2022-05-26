const express = require("express");
const router = express.Router();
//
const verifyToken = require("../middleware/verifyToken");
const NoteController = require("../controllers/note.controller");

router.get("/", NoteController.getNotesAll);

router.post("/add", verifyToken, NoteController.createNote);

router.get("/:id", NoteController.getNoteById);

router.put("/edite/:id", verifyToken, NoteController.updateNoteById);

router.delete("/delete/:id", verifyToken, NoteController.deleteNote);

module.exports = router;
