import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import EmailProvider from "next-auth/providers/email";

import { connectToDatabase } from "../../../util/mongodb";

const dev = process.env.NODE_ENV !== "production";

const options = {
  site: dev ? process.env.NEXTAUTH_URL_DEV : process.env.NEXTAUTH_URL,
  adapter: MongoDBAdapter(connectToDatabase),
  providers: [
    EmailProvider({
      server: {
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.MONGO_URI,
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 1 day
  },
  pages: {
    signIn: "/auth/email-signin",
    verifyRequest: "/auth/verified",
  },
  callbacks: {
    redirect: async () => {
      return Promise.resolve("/admin");
    },
    signIn: async ({ user }) => {
      const { db } = await connectToDatabase();
      const getAdmins = await db.collection("admin_access").find({}).toArray();
      const admins = JSON.parse(JSON.stringify(getAdmins));

      const isAllowedToSignIn = admins.filter(
        (admin) => admin.email === user.email.trim().toLowerCase()
      );

      if (isAllowedToSignIn.length > 0) {
        return true;
      } else {
        return "/";
      }
    },
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);
