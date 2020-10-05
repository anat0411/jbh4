const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const { ObjectId, db } = require("./connectDB");
const { newAccount } = require("./models/AccountOperations");

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
    secret: "asdgbhjfdlskjhgghbhndd",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db }),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.get("/operations/:id", (req, res) => {
  const accountNumber = req.params.id;
  console.log(accountNumber);
  if (accountNumber == null) {
    //also ||accountNumber !== typeof Number
    throw new Error("No account number was inserted");
  }
  newAccount.find({ accountNumber: 10 }, (err, docs) => {
    if (err) return res.json({ success: false });

    res.json(docs);
  });
});

app.post("operations/:id", (req, res) => {
  const { accountNumber } = req.params.id;
  if (accountNumber == null) {
    throw new Error("No account number was inserted");
  }
  const { operationType, amount, date, interest, payments } = req.body;
  if (
    accountNumber == null ||
    operationType == null ||
    amount == null ||
    date == null
  ) {
    throw new Error(" At Least One input is empty");
  }

  if (
    accountNumber !== typeof Number ||
    operationType !== typeof String ||
    date !== typeof Date
  ) {
    throw new Error("Not currect type");
  }

  if (operationType === "loan" && interest == null && payments == null) {
    throw new Error("Interest and payments needs to be added");
  }

  if (
    operationType === "loan" &&
    interest !== typeof Number &&
    payments !== typeof Number
  ) {
    throw new Error("Not currect type");
  }

  if (operationType === "loan" && interest === 0) {
    throw new Error("Interest cannot be 0");
  }

  if (operationType === "loan" && payments === 0) {
    throw new Error("Interest cannot be 0");
  }

  //wasn't checked
  newAccount.findById(accountNumber, async (err, doc) => {
    await doc.save();
    res.json({ success: true });
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
