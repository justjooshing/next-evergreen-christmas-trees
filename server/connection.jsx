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

export const connectToDb = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(uri, opts).then((client) => ({
      client,
      db: client.db(dbName),
    }));
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
