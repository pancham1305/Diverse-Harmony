const express = require("express");
const app = express();
const https = require("https");
const bp = require("body-parser");
const fs = require("fs");
app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/assets"));

app.get("/", (req, res) => {
  res.render(__dirname + "/public/index.ejs");
});
app.get("/Music-Dance", (req, res) => {
  res.render(__dirname + "/public/music_dance.ejs");
});

app.get("/Food", (req, res) => {
  res.render(__dirname + "/public/food.ejs");
});
app.get("/Festivals", (req, res) => {
  res.render(__dirname + "/public/festivals.ejs");
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/assets/images/404.jpg");
});

app.listen(process.env.PORT || 7500, (err) => {
  if (err) {
    console.error("Server Problems!");
  } else {
    console.log("Server is listening at 7500");
  }
});
