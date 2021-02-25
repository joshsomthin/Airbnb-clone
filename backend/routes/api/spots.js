const express = require("express");
const asnycHandler = require("express-async-handler");
const { check } = require("express-validator");
const { Booking } = require("../../db/models");

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

const validateReservation = [
  check("startDate")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a start date."),
  check("endDate")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a checkout date."),
];

router.post(
  "/:spotId/reserve",
  requireAuth,
  validateReservation,
  asnycHandler(async (req, res) => {
    const { spotId, userId, price, body, startDate, endDate } = req.body;
    const booked = await Booking.create({
      spotId,
      userId,
      price,
      body,
      startDate,
      endDate,
    });
    return res.json({ booked });
  })
);

module.exports = router;
