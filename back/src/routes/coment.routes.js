const express = require("express");
const { getComentByImg, getAllComent, addComment, updateComentById, deleteComent } = require("../controllers/index.coment.controllers");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

router.get("/img/commet/:id", verifyToken, getComentByImg);

router.get("/img/comment/all/:id", verifyToken, getAllComent);

router.post("/img/comment/add/:id", verifyToken, addComment);

router.put("/img/comment/edite/:id", verifyToken, updateComentById);

router.delete("/img/comment/delete/:id", verifyToken, deleteComent);

module.exports = router;
