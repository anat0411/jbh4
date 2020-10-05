const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    price: Number,
  },
  {
    collection: "products",
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

Product.insertMany([
  { name: "Computer", price: 5000 },
  { name: "Screen", price: 123 },
  { name: "Flashlight", price: 444 },
  { name: "Phone", price: 600 },
]);

module.export = { Product };
