'use strict'
const express = require("express"),
  router = express.Router(),
  path = require("path"),
  fs = require("fs"),
  logmaker = require("logmaker"),
  socket = require("./socket.js")

logmaker.enable()

let title = "Battle", data = JSON.parse(fs.readFileSync("./express-app/me.json"));

//GET home page.
router.get("/", function(req, res) {
  res.render("index", { title: title });
});
router.get("/play", function(req, res) {
  res.render("play", { title: title, data: data });
});
router.post("/gameScores", function(req, res, next) {
  setScores(req.body);
  let scores = JSON.parse(fs.readFileSync("./express-app/scores.JSON"));
  logmaker.log(scores);
  res.render("gameScores", {
      title: title,
      data: JSON.parse(fs.readFileSync("./express-app/me.json")),
      scores: scores
  });
  socket.broadcast.emit("sendStats", null);
});

var setScores = input => {
    if (input.name == data.name) {
        let newData = JSON.parse(fs.readFileSync("./express-app/scores.JSON"))
        newData.p1=input
        fs.writeFileSync("./express-app/scores.JSON", JSON.stringify(newData))
    } else {
        let newData = JSON.parse(fs.readFileSync("./express-app/scores.JSON"))
        nweData.p2=input
        fs.writeFileSync("./express-app/scores.JSON", JSON.stringify(newData))
        console.log(newData)
    }
}

module.exports = router;
