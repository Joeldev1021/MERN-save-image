const express = require("express");
const router = express.Router();
//
const verifyToken = require("../middleware/verifyToken");

const { getNotes, getNoteById, updateNoteById, deleteNote, createNote } = require("../controllers/index.note.controllers");

router.get("/", getNotes);

router.post("/add", verifyToken, createNote);

router.get("/:id", getNoteById);

router.put("/edite/:id", verifyToken, updateNoteById);

router.delete("/delete/:id", verifyToken, deleteNote);

module.exports = router;
