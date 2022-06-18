const express = require("express");
const app = express();
const bp = require("body-parser");
app.set("view engine", "ejs");
app.use(bp.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/assets"));

app.get("/", (req, res) => {
  res.render(__dirname + "/public/index.ejs");
});

app.listen(7500, () => {
  console.log("Server is listening at 7500");
});
