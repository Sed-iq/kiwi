const express = require("express"),
  mongoose = require("mongoose"),
  app = express(),
  router = require("./modules/router"),
  dotenv = require("dotenv").config();
app.use(router);
mongoose
  .connect(process.env.PORT)
  .then(() => app.listen(5000, console.log("Kiwi running ...")))
  .catch((err) => {
    throw err;
  });
