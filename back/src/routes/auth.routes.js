const express = require("express");
const router = express.Router();

const { singUp, singIn, logout } = require("../controllers/index.user.controllers");

router.post("/signup", singUp);

router.post("/signin", singIn);

router.post("/logout", logout);

module.exports = router;
