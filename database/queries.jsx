import { connectToDb } from "../server/connection";

export const db_announcements = async () => {
  const { db } = await connectToDb();

  return await db.collection("announcements").find({}).toArray();
};

export const db_alerts = async () => {
  const { db } = await connectToDb();

  return await db.collection("alerts").find({}).toArray();
};

export const db_pricePerFoot = async () => {
  const { db } = await connectToDb();

  const data = await db
    .collection("pricePerFoot")
    .find({})
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  return data[0];
};

export const db_basePrice = async () => {
  const { db } = await connectToDb();
  const data = await db
    .collection("basePrice")
    .find({})
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  return data[0];
};
