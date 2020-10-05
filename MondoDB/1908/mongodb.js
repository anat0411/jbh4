const { MongoClient } = require("mongodb");

const client = new MongoClient("");

const run = async () => {
  await client.connect();
  const db = client.db("jbh");
  const collection = db.collection("comments");

  const insert = await collection.insertOne({
    name: "yadid",
    numbers: [4],
    likes: 0,
  });
  console.log(insert.insertedId);

  // await collection.updateOne({name: 'yadid'}, {$set: {numbers: [1,2,3]}});
  await collection.updateOne(
    { name: "yadid" },
    {
      $push: {
        numbers: {
          $each: [1, 2, 3],
        },
      },
      $inc: { likes: 3 },
    }
  );
  const data = await collection.findOne({ name: "yadid" });
  console.log(data);

  const del = await collection.deleteOne({ name: "yadid" });
  console.log(del.deletedCount);
};

run();
