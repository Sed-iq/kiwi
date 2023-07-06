const mongoose = require("mongoose"),
  user = new mongoose.Schema(
    {
      email: {
        required: true,
        type: String,
      },
      password: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
      },
    },
    { timestamps: true }
  ),
  item = new mongoose.Schema(
    {
      name: {
        required: true,
        type: String,
      },
      owner: {
        required: true,
        type: String,
      },
      image: {
        // required: true,
        type: String,
      },
      price: {
        required: true,
        type: Number,
      },
      quantity: {
        required: true,
        type: Number,
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      sold: {
        type: Number,
      },
      size: {
        type: Number,
      },
    },
    { timestamps: true }
  );

module.exports.user = mongoose.model("user", user);
module.exports.item = mongoose.model("item", item);
