import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  const { db } = await connectToDatabase();
  const { value, id } = req.body;
  switch (req.method) {
    case "PUT": {
      await db
        .collection("alert")
        .replaceOne({ id }, { value, id, date: new Date() }, { upsert: true });
      const alert = await db.collection("alert").find({}).toArray();
      res.status(200).send(alert);
      break;
    }
    case "DELETE": {
      await db.collection("alert").deleteOne({ id });
      const alert = await db.collection("alert").find({}).toArray();
      res.status(200).send(alert);
      break;
    }
    default: {
      const getAlert = await db.collection("alert").find({}).toArray();
      const alert = JSON.parse(JSON.stringify(getAlert));
      res.json(alert);
    }
  }
};

export default handler;
