import { createClient } from "contentful";

import { contentfulApi, dev } from "../config";

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
      }),
    ),
  );

  const content = { alerts: [], announcements: [], prices: [] };
  // separate into alerts/announcements
  items.forEach(({ contentId, fields, id }) => {
    if (contentId === "prices") {
      content.prices.push({ fields, id });
    } else if (!!fields.visibility) {
      content[contentId].push({ fields, id });
    }
  });

  return content;
};
