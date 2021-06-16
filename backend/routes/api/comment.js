const express = require("express");
const asnycHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { Spot, Review, User } = require("../../db/models");
const router = express.Router();

router.get(
  "/:spotId",
  asnycHandler(async (req, res) => {
    const { spotId } = req.params;
    const comments = await Review.findAll({
      where: {
        spotId: spotId,
      },
      include: {
        model: User,
      },
    });
    if (comments) {
      return res.json(comments);
    } else {
      return res.json({});
    }
  })
);

const validateComment = [
  check("body")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Please enter a comment."),
  handleValidationErrors,
];

router.post(
  "/",
  validateComment,
  asnycHandler(async (req, res, next) => {
    const { spotId, userId, body } = req.body;
    const comment = Review.create({
      userId,
      spotId,
      body,
    });
    return res.json({ comment });
  })
);

router.delete(
  "/:commentId",
  asnycHandler(async (req, res) => {
    const { commentId } = req.params;
    const comment = await Review.findByPk(commentId);
    await comment.destroy();
    return res.json({ commentId });
  })
);

module.exports = router;
