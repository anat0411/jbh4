const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

mongoose.connect(
  "mongodb+srv://anat1234:anat1234@cluster0.jwyi2.mongodb.net/tryout?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Mongodb connect!"));

const userSchema = Schema(
  {
    name: String,
    email: String,
    score: Number,
  },
  {
    collection: "users_3",
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User, ObjectId: Types.ObjectId };
