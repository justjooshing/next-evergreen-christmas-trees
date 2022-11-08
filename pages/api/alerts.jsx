import { db_alerts } from "../../database/queries";

const getAlerts = async (req, res) =>
  req.method === "GET" ? res.json(await db_alerts()) : res.status(404);

export default getAlerts;
