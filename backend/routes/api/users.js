const express = require("express");
const asnycHandler = require("express-async-handler");
const { check } = require("express-validator");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
const { route } = require("./session");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email"),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

router.post(
  "/",
  validateSignup,
  asnycHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

module.exports = router;

/*
fetch('/api/users',{
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    'XSRF-TOKEN': `LaGt37t2-J5GZBvYk-wVneKxXWAs5EjbAdEM`
  },
  body: JSON.stringify({
    email: 'spidey@spider.mansss',
    username: 'Spideysss',
    password: 'password'
  })
}).then(res=> res.json()).then(data=> console.log(data))

fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({
    email: 'nerd@ners.gov',
    username: 'Spideys',
    password: 'password'
  })
}).then(res => res.json()).then(data => console.log(data));
*/
