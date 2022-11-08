import {
  db_alerts,
  db_announcements,
  db_basePrice,
  db_pricePerFoot,
} from "../database/queries";

const handleResult = async (callback) =>
  JSON.parse(JSON.stringify(await callback()));

export const getPricePerFoot = async () => await handleResult(db_pricePerFoot);
export const getBasePrice = async () => await handleResult(db_basePrice);
export const getAlerts = async () => await handleResult(db_alerts);
export const getAnnouncements = async () =>
  await handleResult(db_announcements);
