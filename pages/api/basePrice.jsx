import { db_basePrice } from "../../database/queries";

const getBasePrice = async (req, res) =>
  req.method === "GET" ? res.json(await db_basePrice()) : res.status(404);

export default getBasePrice;
