const router = require("express").Router();

router.post("/test", function (req, res) {
  res.json({ request: req.body });
});

module.exports = router;
