import { db_announcements } from "../../database/queries";

const getAnnouncements = async (req, res) =>
  req.method === "GET" ? res.json(await db_announcements()) : res.status(404);

export default getAnnouncements;
