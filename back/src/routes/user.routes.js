const { Router } = require("express");
const router = Router();
const UserController = require("../controllers/user.controller");
const veryToken = require("../middleware/verifyToken");

router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserById);
router.get("/profile", veryToken, UserController.getProfile);
router.get("/email/:email", UserController.getUserByEmail);
router.put("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);

module.exports = router;
