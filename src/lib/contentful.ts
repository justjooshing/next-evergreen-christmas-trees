import contentful from "contentful";
const { createClient } = contentful;

export const getContentful = async () => {
  const accessToken = import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_API
    : import.meta.env.CONTENTFUL_API;

  const client = createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken,
    ...(import.meta.env.DEV && { host: "preview.contentful.com" }),
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

  const content: { alerts: any[]; announcements: any[]; prices: any[] } = { alerts: [], announcements: [], prices: [] };
  // separate into alerts/announcements/prices
  items.forEach(({ contentId, fields, id }) => {
    if (contentId === "prices") {
      content.prices.push({ fields, id });
    } else if (!!fields.visibility) {
      content[contentId].push({ fields, id });
    }
  });

  return content;
};
