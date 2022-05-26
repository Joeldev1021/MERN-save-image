const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controllers");

router.post("/signup", AuthController.singUp);

router.post("/signin", AuthController.singIn);

router.post("/logout", AuthController.logout);

module.exports = router;
