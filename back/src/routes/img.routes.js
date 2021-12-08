const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const { uploadImg, getImgs, deleteImg, updateImg, getAllImg, getImgById } = require("../controllers/index.img.controllers");
const { verify } = require("jsonwebtoken");

router.get("/img", verifyToken, getImgs);

router.get("/img/all", verifyToken, getAllImg);

router.get("/img/:id", verifyToken, getImgById);

router.post("/img/upload", verifyToken, uploadImg);

router.delete("/img/delete/:id", verifyToken, deleteImg);

router.put("/img/update/:id", verify, updateImg);

module.exports = router;
