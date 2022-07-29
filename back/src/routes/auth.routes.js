const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controllers");

router.post("/signup", AuthController.signUp);

router.post("/signin", AuthController.signIn);

router.post("/logout", AuthController.logout);

module.exports = router;
