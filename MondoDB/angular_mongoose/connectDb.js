const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

mongoose.connect(
  "mongodb+srv://anat1234:anat1234@cluster0.jwyi2.mongodb.net/store?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", (e) => console.log(e));
db.once("open", () => {
  console.log(`Mongose connected`);
});

module.exports = { db, ObjectId };
