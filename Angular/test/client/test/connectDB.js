const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Types;

mongoose.connect(
  "mongodb+srv://anat1234:anat1234@cluster0.jwyi2.mongodb.net/BankAccounts?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Mongoose connected"));

module.exports = { db };
