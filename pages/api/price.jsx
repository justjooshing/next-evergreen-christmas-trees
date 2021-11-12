import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  const { db } = await connectToDatabase();
  const { value } = req.body;
  const getPrice = () =>
    db
      .collection("pricePerFoot")
      .find({})
      .sort({ date: -1 })
      .limit(1)
      .toArray();
  const sendPrice = async () => await res.status(200).send(getPrice);

  switch (req.method) {
    case "POST": {
      await db
        .collection("pricePerFoot")
        .insertOne({ value, date: new Date() });
      await sendPrice();
      break;
    }
    default: {
      await sendPrice();
      res.json(pricePerFoot);
    }
  }
};

export default handler;
