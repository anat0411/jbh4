const { MongoClient, ObjectId } = require("mongodb");

const uri = "";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const run = async () => {
  await client.connect();

  const db = client.db("jbh");
  const collection = db.collection("users");

  // READ
  // const allUsers = await collection.find({}).project({name: 1}).sort({name: -1}).toArray();
  // const one = await collection.findOne({_id: ObjectId("5f39647c79ad8b0c2ba0e620")})
  // console.log(allUsers, one)

  // CREATE
  // await collection.insertOne({name: "hello"});
  // await collection.insertMany([{name: "hello"}, {name: "world", address: "x"}]);

  // DELETE
  // const del = await collection.deleteMany({name: "hello"});
  // console.log(del.deletedCount);

  // await collection.deleteOne({name: "hello"});

  // UPDATE
  // const upsert = await collection.updateOne({name: "x"}, {$set: {name: "wow"}}, {upsert: true});
  // const update = await collection.updateOne({name: "y"}, {$set: {name: "world"}});
  // console.log(update.updatedCount, upsert.upsertedCount);

  // const updateMany = await collection.updateMany({name: "hello"}, {$set: {name: "ddd"}})

  client.close();
};

run();
