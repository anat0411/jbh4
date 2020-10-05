const express = require("express");
const { User, ObjectId } = require("./userModel");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// User.create([
//   { name: "x", email: "x@x", score: 1 },
//   { name: "y", email: "y@y", score: 2 },
//   { name: "t", email: "t@t", score: 3 },
//   { name: "z", email: "z@z", score: 4 },
// ]);

app.use(express.json());

app
  .route("/api/users")
  .get((req, res) => {
    User.find({}, (err, docs) => {
      if (err) return res.json({ success: false });

      res.json({ success: true, docs });
    });
  })
  .post((req, res) => {
    User.create(req.body, (err, docs) => {
      if (err) return res.json({ success: false });

      res.json({ success: true, docs });
    });
  });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const { id } = req.params;

    User.findById(id, (err, doc) => {
      if (err) return res.json({ success: false });

      res.json({ success: true, doc });
    });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    User.updateOne(
      { _id: ObjectId(id) },
      { $set: { name: name } },
      (err, doc) => {
        if (err) return res.json({ success: false });

        res.json({ success: true, count: doc.nModified });
      }
    );
  })
  .delete(async (req, res) => {
    const { id } = req.params;

    try {
      const del = await User.deleteOne({ _id: ObjectId(id) });
      res.json({ success: true, count: del.deletedCount });
    } catch {
      res.json({ success: false });
    }
  });

app.listen(port, () => console.log(`Server tunning on port ${port}`));
