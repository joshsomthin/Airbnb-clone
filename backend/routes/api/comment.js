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

// router.post(
//   "/:spotId",
//   asyncHandler(async (req, res) => {})
// );

router.delete(
  "/:commentId",
  asnycHandler(async (req, res) => {
    const { commentId } = req.params;
    console.log(commentId);
    // const comment = Review.findByPk(commentId);
    // console.log(comment);
    // comment.destroy();
    return res.json({ commentId: commentId });
  })
);

module.exports = router;
