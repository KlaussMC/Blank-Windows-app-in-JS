'use strict'
const express = require("express"),
  router = express.Router(),
  path = require("path"),
  fs = require("fs")

let title = "Battle";

//GET home page.
router.get("/", function(req, res) {
  res.render("index", { title: title });
});
router.get("/play", function(req, res) {
  res.render("play", { title: title, data: JSON.parse(fs.readFileSync("./express-app/me.json")) });
});

module.exports = router;
