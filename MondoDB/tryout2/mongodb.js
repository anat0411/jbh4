const { MongoClient, ObjectID } = require("mongodb");

const url =
  "mongodb+srv://anat1234:anat1234@cluster0.jwyi2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url, { useUnifiedTopology: true });

const run = async () => {
  await client.connect();

  const db = client.db("tryout");
  const users = db.collection("users");

  //READ
  //   const allUsers = await users.find({}).toArray(); //brings all the users
  //   const allUsersSorted = await users.find({}).sort({ name: -1 }).toArray(); //sorts all users
  //   const nameSearch = await users
  //     .find({ name: "Leanne Graham" })
  //     .project({ name: 1 }) //only name and id
  //     .toArray();

  //   const searchByID = await users.findOne({
  //     _id: ObjectID("5f55f124a046846110ea0b5e"),
  //   });
  //   console.log(searchByID);

  //   console.log(allUsersSorted);

  //CREATE
  //   await users.insertOne({ name: "hello" });
  //   const hello = await users.findOne({ name: "hello" });

  //   console.log(hello);

  //   await users.insertMany([{ name: "World" }, { name: "Banana" }]);

  //DELETE
  //   const deleted = await users.deleteMany({ name: "hello" });
  //   console.log((deleted.deletedCount)); //gives the number of deleted objects

  //UPDATE
  //   const update = await users.updateOne(
  //     { name: "Banana" },
  //     { $set: { name: "WOW" } }
  //   );

  //   const update = await users.updateOne(
  //     { name: "HOLA" },
  //     { $set: { name: "SHOCKED" } },
  //     { upsert: true } //if there is no "HOLA", create "SHOCKED"
  //   );

  //   console.log(update.updatedCount, upsert.upsertedConut);

  //   const updateMany = await users.updateMany(
  //     { name: "SHOCKED" },
  //     { $set: { name: "XXX" } }
  //   );

  client.close();
};

run();
