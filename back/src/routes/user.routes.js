const { Router } = require("express");
const router = Router();
const UserController = require("../controllers/user.controller");

router.get("/", UserController.getAllUser);

module.exports = router;
