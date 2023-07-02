const express = require("express"),
  mongoose = require("mongoose"),
  app = express(),
  router = require("./modules/router"),
  PORT = "mongodb://localhost/kiwi";
app.use(router);
mongoose
  .connect(PORT)
  .then(() => app.listen(5000, console.log("Kiwi running ...")))
  .catch((err) => {
    throw err;
  });
