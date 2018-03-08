'use strict'
const express = require("express"),
  router = express.Router(),
  path = require("path"),
  fs = require("fs")

let title = "Battle", data = JSON.parse(fs.readFileSync("./express-app/me.json"));

let scores = {
    p1: {
        score: null,
        health: null,
        money: null
    },
    p2: {
        score: null,
        health: null,
        money: null
    }
}

//GET home page.
router.get("/", function(req, res) {
  res.render("index", { title: title });
});
router.get("/play", function(req, res) {
  res.render("play", { title: title, data });
});
router.get("/gameScores", function(req, res) {
  res.render("gameScores", { title: title, data });
});
router.post("/play", function(req, res) {
  setScores(req.body);
  res.render("play", {
      title: title,
      data: JSON.parse(fs.readFileSync("./express-app/me.json")),
      scores
  });
});

var setScores = input => {
    data.name == input.username? () => {scores.p1.scores = input.score; scores.p1.health = input.health; scores.p1.money = input.money;  }() : () => {scores.p2.scores = input.score; scores.p2.health = input.health; scores.p2.money = input.money; }();
}

module.exports = router;
