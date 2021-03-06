const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const { ObjectId, db } = require("./connectDb");
const { Cart } = require("./models/cart");
const { Product } = require("./models/product");

const port = process.env.PORT || 3000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: "asdfsdfDSFSDF234234@#$keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db }),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
    },
  })
);

app.get("/products", (req, res) => {
  Product.find({}, (err, docs) => {
    if (err) return res.json({ success: false });

    res.json(docs);
  });
});

app
  .route("/cart")
  .get((req, res) => {
    if (!req.session.cartID) {
      Cart.create({}, (err, doc) => {
        if (err) return res.json({ success: false });

        req.session.cartID = doc._id;
        res.json({ success: true, data: doc });
      });

      return;
    }

    Cart.findById(req.session.cartID)
      .populate("products")
      .exec((err, doc) => {
        if (err) return res.json({ success: false });

        res.json({ success: true, data: doc });
      });
  })
  .put((req, res) => {
    const { productID } = req.body;
    const { cartID } = req.session;

    if (!cartID || !productID) return res.json({ success: false });

    Cart.findById(cartID, async (err, doc) => {
      doc.products.push(productID);
      await doc.save();
      res.json({ success: true });
    });
  });

app.listen(port, () => console.log(`Server running on port ${port}`));
