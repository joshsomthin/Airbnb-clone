const express = require("express");
const asnycHandler = require("express-async-handler");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");
const router = express.Router();

router.post(
  "/",
  asnycHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

module.exports = router;

/*
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `Wgqwkoty-TPr-Z7vOXhq2elq3y6hd7dP9__k`
  },
  body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));
*/
