const express = require("express");
const deplete = require("./controllers/deplete");
const stock = require("./controllers/stock");
const del = require("./controllers/delete");
const transfer = require("./controllers/transfer"),
  app = express(),
  auth = require("./auth"),
  create = require("./controllers/create");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/signin", auth.login);
app.use(auth.verify);
app.post("/create", create);
app.put("/stock/:id", stock);
app.move("/:id", transfer);
app.delete("/:id", del);
app.put("/deplete/:id", deplete);
// auth = required

module.exports = app;
