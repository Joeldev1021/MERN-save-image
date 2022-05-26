const { Router } = require("express");
const router = Router();

router.use("/note", require("./note.routes"));
router.use("/img", require("./img.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));

module.exports = router;
