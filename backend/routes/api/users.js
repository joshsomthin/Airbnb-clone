const express = require("express");
const asnycHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");
const { route } = require("./session");
const router = express.Router();

router.post(
  "/",
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
