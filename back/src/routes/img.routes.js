const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");
const { verify } = require("jsonwebtoken");
const ImgController = require("../controllers/img.controllers");

router.get("/", verifyToken, ImgController.getImgs);

router.get("/all", verifyToken, ImgController.getAllImg);

router.get("/:id", verifyToken, ImgController.getImgById);

router.post("/upload", verifyToken, ImgController.uploadImg);

router.delete("/delete/:id", verifyToken, ImgController.deleteImg);

router.put("/update/:id", verify, ImgController.updateImg);

module.exports = router;
