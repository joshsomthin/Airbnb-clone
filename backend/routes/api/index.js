// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const spotsRouter = require("./spots.js");
const commentRouter = require("./comment.js");
const { route } = require("./spots.js");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/spots", spotsRouter);

router.use("/comments", commentRouter);

module.exports = router;
