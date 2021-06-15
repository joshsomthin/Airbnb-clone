const express = require("express");
const asnycHandler = require("express-async-handler");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User, Review } = require("../../db/models");
const router = express.Router();

router.get(
  "/:spotId",
  asnycHandler(async (req, res) => {
    const comments = await Review.findAll({
      where: {
        spotId: spotId,
      },
    });
    if (comments) {
      return res.json(comments);
    } else {
      return res.json({});
    }
  })
);

router.post(
  "/:spotId",
  asyncHandler(async (req, res) => {})
);

router.delete(
  "/:commentId",
  asyncHandler(async (req, res) => {})
);

module.exports = router;
