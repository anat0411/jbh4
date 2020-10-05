const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    id: { type: Number },
    date_of_birth: { type: Date, default: Date.now },
    email: String,
    name: { type: String, required: true },
    username: {
      type: String,
      default: function () {
        return this.name.toLowerCase();
      },
    },
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: {
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
  {
    collection: "users_2",
    timestamps: true,
  }
);

userSchema.methods.getAge = function () {
  return Date.now() - this.date_of_birth;
};

const User = mongoose.model("User", userSchema);

// const firstUser = new User({
//     name: "ABC",
//     email: "test@test.com"
// });

// console.log(firstUser.getAge())

// firstUser.save();

// User.create({name: "Yaffa"}, function(err, doc) {
//     doc.name = "ddd";
//     doc.email = "hello@world.com";
//     doc.save();
// });

// console.log(firstUser);

User.findOne({ name: "ddd" }, (err, doc) => {
  console.log(doc.getAge());
  console.log(doc);

  doc.date_of_birth = Date.now();
  doc.save();
});
