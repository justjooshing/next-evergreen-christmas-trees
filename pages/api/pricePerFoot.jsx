import { db_pricePerFoot } from "../../database/queries";

const getPricePerFoot = async (req, res) =>
  req.method === "GET" ? res.json(await db_pricePerFoot()) : res.status(404);

export default getPricePerFoot;
