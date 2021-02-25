import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  const { db } = await connectToDatabase();
  const { value } = req.body;
  switch (req.method) {
    case "POST": {
      await db.collection("price").insertOne({ value, date: new Date() });
      const announcements = await db
        .collection("price")
        .find({})
        .sort({ date: -1 })
        .limit(1)
        .toArray();
      res.status(200).send(announcements);
      break;
    }
    default: {
      const getAnnouncements = await db
        .collection("price")
        .find({})
        .sort({ date: -1 })
        .limit(1)
        .toArray();
      const announcements = JSON.parse(JSON.stringify(getAnnouncements));
      res.json(announcements);
    }
  }
};

export default handler;
