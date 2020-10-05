const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

mongoose.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Mongoose connected"));

module.exports = { db, ObjectId };
