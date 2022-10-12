import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import EmailProvider from "next-auth/providers/email";

import { connectToDb } from "../../../util/mongodb";

const options = {
  site: process.env.NEXTAUTH_URL,
  adapter: MongoDBAdapter(connectToDb),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
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
      const { db } = await connectToDb();
      const getAdmins = await db?.collection("admin_access").find({}).toArray();
      const admins = JSON.parse(JSON.stringify(getAdmins));

      const isAllowedToSignIn = admins.filter(
        ({ email }) => email === user.email.trim().toLowerCase()
      );
      const emailPresent = admins.map(({ email }) => email);
      return !!isAllowedToSignIn.length ? "/admin" : "/";
    },
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options);
