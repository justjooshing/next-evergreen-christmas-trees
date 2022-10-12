import { MongoClient } from "mongodb";

let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!dbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(uri, opts);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
export const db = cached.conn.db(dbName);

export const getAnnouncements = async (db) => {
  const announcements = await db.collection("announcements").find({}).toArray();
  return JSON.parse(JSON.stringify(announcements));
};

export const getAlerts = async (db) => {
  const alerts = await db.collection("alerts").find({}).toArray();
  return JSON.parse(JSON.stringify(alerts));
};

export const getPricePerFoot = async (db) => {
  const pricePerFoot = await db
    .collection("pricePerFoot")
    .find({})
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  return JSON.parse(JSON.stringify(pricePerFoot))[0];
};

export const getBasePrice = async (db) => {
  const basePrice = await db
    .collection("basePrice")
    .find({})
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  return JSON.parse(JSON.stringify(basePrice))[0];
};
