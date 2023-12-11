export const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? process.env.NEXTAUTH_URL_DEV
  : process.env.NEXTAUTH_URL;

export const contentfulApi = dev
  ? process.env.CONTENTFUL_PREVIEW_API
  : process.env.CONTENTFUL_API;
