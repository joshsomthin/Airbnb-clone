const express = require("express");
const asnycHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Spot, Home, Image, Review, User, Booking } = require("../../db/models");

const router = express.Router();

router.get(
  "/locations",
  asnycHandler(async (req, res) => {
    const spots = await Home.findAll({
      attributes: ["spotId", "guest", "type", "latitude", "longitude"],
    });
    if (spots) {
      return res.json(spots);
    } else {
      return res.json({});
    }
  })
);

router.get(
  "/search",
  asnycHandler(async (req, res) => {
    const spots = await Home.findAll({
      attributes: [
        "spotId",
        "guest",
        "type",
        "latitude",
        "longitude",
        "bed",
        "bath",
      ],
      include: {
        model: Spot,
        attributes: ["body", "price"],
        include: {
          model: Image,
          attributes: ["imageUrl"],
        },
      },
    });
    if (spots) {
      return res.json(spots);
    } else {
      return res.json({});
    }
  })
);

router.get(
  "/:spotId",
  asnycHandler(async (req, res) => {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId, {
      include: [
        { model: User },
        { model: Booking },
        { model: Image },
        { model: Home },
        { model: Review, include: [{ model: User }] },
      ],
    });
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

router.delete(
  "/:spotId/comment/:commentId",
  requireAuth,
  asnycHandler(async (req, res) => {
    const { commentId, spotId } = req.params;
    const comment = await Review.findByPk(commentId);
    await comment.destroy();
    const spot = await Spot.findByPk(spotId, {
      include: [
        { model: User },
        { model: Booking },
        { model: Image },
        { model: Home },
        { model: Review, include: [{ model: User }] },
      ],
    });
    if (spot) {
      return res.json(spot);
    } else {
      return res.json({});
    }
  })
);
module.exports = router;
