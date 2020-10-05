const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;
const { ObjectID } = mongoose.Types;

const cartSchema = new Schema(
  {
    products: [{ type: ObjectId, ref: "Product" }],
  },
  {
    collection: "carts",
    timestamps: true,
  }
);
const Cart = mongoose.model("Cart", productSchema);

module.export = { Cart };
