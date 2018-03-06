'use strict'
const express = require("express"),
  router = express.Router();

let title = "Title";

//GET home page.
router.get("/", function(req, res) {
  res.render("index", { title: title });
});

module.exports = router;
