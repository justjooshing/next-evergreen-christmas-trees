import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { connectToDatabase } from "../../../util/mongodb";

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
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
  },
  callbacks: {
    redirect: async (url, _) => {
      return Promise.resolve("/admin");
    },
    signIn: async (user) => {
      const { db } = await connectToDatabase();
      const getAdmins = await db.collection("admin_access").find({}).toArray();
      const admins = JSON.parse(JSON.stringify(getAdmins));

      const isAllowedToSignIn = admins.filter(
        (admin) => admin.email === user.email.trim()
      );

      if (isAllowedToSignIn.length > 0) {
        return true;
      } else {
        return "/";
      }
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
