const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect(
  "mongodb+srv://anat1234:anat1234@cluster0.jwyi2.mongodb.net/tryout?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", (e) => console.error(e));
db.once("open", () => console.log("Mondodb connect!"));

const userSchema = Schema(
  {
    id: { type: Number },
    name: { type: String, required: true },
    username: {
      type: String,
      unique: true,
      default: function () {
        return this.name.toLowerCase();
      },
    },
    date_of_birth: { type: Date, default: Date.now },
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geoLocation: {
        lat: Number,
        lng: Number,
      },
    },
    phone: String,
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String,
    },
  },
  { collection: "users_2" }
);

userSchema.methods.getAge = function () {
  return Date.now() - this.date_of_birth;
};

const User = mongoose.model("User", userSchema);

// const firstUser = new User({
//   name: "OMAMA",
// });
// console.log(firstUser.getAge());
// firstUser.save();

// User.create({ name: "omer" }, function (err, doc) {
//   (doc.name = "DDD"), (doc.username = "FFF"), doc.save();
// });

User.findOne({ name: "DDD" }, function (err, doc) {
  console.log(doc.getAge()), (doc.date_of_birth = Date.now());
  doc.save();
});
