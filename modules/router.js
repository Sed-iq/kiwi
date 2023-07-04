const express = require("express"),
  app = express(),
  auth = require("./auth"),
  create = require("./controllers/create");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/signin", auth.login);
app.post("/create", create);
// auth = required

module.exports = app;
