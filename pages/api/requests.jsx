import { db } from "../../util/mongodb";

const handler = async (req, res) => {
  const { value, id, type } = req.body;
  const getItems = () => db.collection(type).find({}).toArray();

  const sendResponse = async () => res.status(200).send(await getItems());

  switch (req.method) {
    case "DELETE": {
      await db.collection(type).deleteOne({ id });
      await sendResponse();
      break;
    }
    case "POST": {
      await db
        .collection(type)
        .insertOne({ value, id, visibility: true, date: new Date() });
      await sendResponse();
      break;
    }
    case "PUT": {
      const val = await db.collection(type).findOne({ id });
      await db
        .collection(type)
        .updateOne({ id }, { $set: { visibility: !val.visibility } });
      await sendResponse();
      break;
    }
    default: {
      await sendResponse();
    }
  }
};

export default handler;
