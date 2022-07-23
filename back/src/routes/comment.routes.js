const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comment.controller");
const verifyToken = require("../middleware/verifyToken");

router.get("/img/commet/:id", verifyToken, CommentController.getComentByImg);

router.get("/img/comment/all/:id", verifyToken, CommentController.getAllComent);

router.post("/img/comment/add/:id", verifyToken, CommentController.addComment);

router.put("/img/comment/edite/:id", verifyToken, CommentController.updateComentById);

router.delete("/img/comment/delete/:id", verifyToken, CommentController.deleteComent);

module.exports = router;
