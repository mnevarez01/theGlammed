const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const glammedSchema = new Schema({
  product: { type: String, required: true },
  creator: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Book", glammedSchema);

module.exports = Product;
