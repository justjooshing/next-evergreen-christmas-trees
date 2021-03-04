import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  const { db } = await connectToDatabase();
  const { value } = req.body;
  switch (req.method) {
    case "POST": {
      await db.collection("price").insertOne({ value, date: new Date() });
      const price = await db
        .collection("price")
        .find({})
        .sort({ date: -1 })
        .limit(1)
        .toArray();
      res.status(200).send(price);
      break;
    }
    default: {
      const getPrice = await db
        .collection("price")
        .find({})
        .sort({ date: -1 })
        .limit(1)
        .toArray();
      const price = JSON.parse(JSON.stringify(getPrice));
      res.json(price);
    }
  }
};

export default handler;
