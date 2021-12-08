const express = require("express");
const router = express.Router();
//
const verifyToken = require("../middleware/verifyToken");

const { getNotes, getNoteById, updateNoteById, deleteNote, createNote } = require("../controllers/index.note.controllers");

router.get("/note", verifyToken, getNotes);

router.post("/note/add", verifyToken, createNote);

router.get("/note/:id", getNoteById);

router.put("/note/edite/:id", verifyToken, updateNoteById);

router.delete("/note/delete/:id", verifyToken, deleteNote);

module.exports = router;
