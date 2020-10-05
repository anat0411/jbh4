const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const cartSchema = new Schema(
  {
    products: [
      {
        product: { type: ObjectId, ref: "Product" },
        // units: Number,
      },
    ],
  },
  {
    collection: "carts",
    timestamp: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };
