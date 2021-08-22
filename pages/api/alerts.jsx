import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  const { db } = await connectToDatabase();
  const { value, id } = req.body;
  switch (req.method) {
    case "DELETE": {
      await db.collection("alert").deleteOne({ id });
      const alerts = await db.collection("alert").find({}).toArray();
      res.status(200).send(alerts);
      break;
    }
    case "POST": {
      await db
        .collection("alert")
        .insertOne({ value, id, visibility: true, date: new Date() });
      const alerts = await db.collection("alert").find({}).toArray();
      res.status(200).send(alerts);
      break;
    }
    case "PUT": {
      const val = await db.collection("alert").findOne({ id });
      await db
        .collection("alert")
        .updateOne({ id }, { $set: { visibility: !val.visibility } });
      const alerts = await db.collection("alert").find({}).toArray();
      res.status(200).send(alerts);
      break;
    }
    default: {
      const getAlerts = await db.collection("alert").find({}).toArray();
      const alerts = JSON.parse(JSON.stringify(getAlerts));
      res.json(alerts);
    }
  }
};

export default handler;
