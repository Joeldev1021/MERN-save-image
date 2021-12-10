const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const { addComment, getAllComent, deleteComent, updateComentById, getComentByImg } = require("../controllers/index.coment.controllers");

router.get("/img/commet/:id", verifyToken, getComentByImg);

router.get("/img/comment/all/:id", verifyToken, getAllComent);

router.post("/img/comment/add/:id", verifyToken, addComment);

router.put("/img/comment/edite/:id", verifyToken, updateComentById);

router.delete("/img/comment/delete/:id", verifyToken, deleteComent);

module.exports = router;
