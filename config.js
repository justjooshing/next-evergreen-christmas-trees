export const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? process.env.NEXT_PUBLIC_NEXTAUTH_URL_DEV
  : process.env.NEXT_PUBLIC_NEXTAUTH_URL;

export const contentfulApi = dev
  ? process.env.CONTENTFUL_PREVIEW_API
  : process.env.CONTENTFUL_API;
