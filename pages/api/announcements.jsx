import { connectToDatabase } from "../../util/mongodb";

const handler = async (req, res) => {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db.collection("message").find({}).toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));
  res.json(announcements);
};

export default handler;
