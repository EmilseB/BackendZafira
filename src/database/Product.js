const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  src: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  filamentVariant: {
    type: Boolean,
    required: false,
  },
  stoneVariant: {
    type: Boolean,
    required: false,
  },
  velvetVariant: {
    type: Boolean,
    required: false,
  },
},
{versionKey:false}
);

module.exports = mongoose.model("Product", ProductSchema);
