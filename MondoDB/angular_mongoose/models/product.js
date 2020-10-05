const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    price: Number,
  },
  {
    collection: "products",
    timestamp: true,
  }
);

const Product = mongoose.model("Product", productSchema);

// Product.insertMany(
//   { name: "Computer", price: 1000 },
//   { name: "Screen", price: 250 },
//   { name: "Laptop", price: 3000 },
//   { name: "Flashlight", price: 100 }
// );

module.exports = { Product };
