const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

// 'mongodb://localhost'
mongoose.connect(
  "mongodb+srv://anat1234:anat1234@cluster0.jwyi2.mongodb.net/tryout?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Mongodb connect!"));

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    score: { type: Number, required: true },
  },
  {
    collection: "users_4",
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User, ObjectId: Types.ObjectId };
