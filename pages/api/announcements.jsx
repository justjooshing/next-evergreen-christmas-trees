import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  const { db } = await connectToDatabase();
  const { value, id } = req.body;
  switch (req.method) {
    case "DELETE": {
      await db.collection("message").deleteOne({ id });
      const announcements = await db.collection("message").find({}).toArray();
      res.status(200).send(announcements);
      break;
    }
    case "POST": {
      await db
        .collection("message")
        .insertOne({ value, id, visibility: true, date: new Date() });
      const announcements = await db.collection("message").find({}).toArray();
      res.status(200).send(announcements);
      break;
    }
    case "PUT": {
      const val = await db.collection("message").findOne({ id });
      await db
        .collection("message")
        .updateOne({ id }, { $set: { visibility: !val.visibility } });
      const announcements = await db.collection("message").find({}).toArray();
      res.status(200).send(announcements);
      break;
    }
    default: {
      const getAnnouncements = await db
        .collection("message")
        .find({})
        .toArray();
      const announcements = JSON.parse(JSON.stringify(getAnnouncements));
      res.json(announcements);
    }
  }
};

export default handler;
