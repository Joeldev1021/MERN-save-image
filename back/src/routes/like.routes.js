const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const LikeController = require("../controllers/like.controllers");

router.post("/img/like/add/:id", verifyToken, LikeController.addLike);

module.exports = router;
