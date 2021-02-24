const express = require("express");
const asnycHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Spot } = require("../../db/models");

const router = express.Router();

router.get(
  "/:spotId",
  asnycHandler(async (req, res) => {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId, { include: { all: true } });
    if (spot) {
      return res.json(spot);
    } else {
      return res.json({});
    }
  })
);

module.exports = router;
