const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("get all users");
});

module.exports = router;
