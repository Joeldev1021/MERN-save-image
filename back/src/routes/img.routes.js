const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const { uploadImg, getImgs, deleteImg, updateImg, getAllImg, getImgById } = require("../controllers/index.img.controllers");
const { verify } = require("jsonwebtoken");

router.get("/", verifyToken, getImgs);

router.get("/all", verifyToken, getAllImg);

router.get("/:id", verifyToken, getImgById);

router.post("/upload", verifyToken, uploadImg);

router.delete("/delete/:id", verifyToken, deleteImg);

router.put("/update/:id", verify, updateImg);

module.exports = router;
