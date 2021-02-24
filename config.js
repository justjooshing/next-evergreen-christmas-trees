const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://http://next-evergreen-christmas-trees.vercel.app";
