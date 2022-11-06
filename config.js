export const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? process.env.NEXTAUTH_URL_DEV
  : process.env.NEXTAUTH_URL;
