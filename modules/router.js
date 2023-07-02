const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.send("Home boys");
});

module.exports = app;
