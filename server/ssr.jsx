import { createClient } from "contentful";

import { db_basePrice, db_pricePerFoot } from "../database/queries";
import { contentfulApi, dev } from "../config";

const handleResult = async (callback) =>
  JSON.parse(JSON.stringify(await callback()));

export const getPricePerFoot = async () => await handleResult(db_pricePerFoot);
export const getBasePrice = async () => await handleResult(db_basePrice);

export const getContentful = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: contentfulApi,
    ...(dev && { host: "preview.contentful.com" }),
  });

  /**
   * Take just the field, id and contentId
   */
  const items = await client.getEntries().then(({ items }) =>
    items.map(
      ({
        fields,
        sys: {
          id,
          contentType: {
            sys: { id: contentId },
          },
        },
      }) => ({
        fields,
        id,
        contentId,
      })
    )
  );

  const content = { alerts: [], announcements: [] };
  // separate into alerts/announcements
  items.forEach(({ contentId, fields, id }) => {
    if (!!fields.visibility) {
      content[contentId].push({ fields, id });
    }
  });

  return content;
};
