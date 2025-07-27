import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
// import { saltAndHashPassword } from "@/utils/password";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/app/lib/prisma";
// import prisma from "@/app/lib/prisma";
import bcrypt from "bcryptjs";
import prisma from "./src/app/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // export const authOptions = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "youremail@gmail.com",
        },
        password: {
          label: "Password",
          type: "password ",
          placeholder: "******",
        },
      },
      authorize: async (credentials) => {
        // let user = null;
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        // logic to salt and hash password
        // const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if the user exists
        // user = await getUserFromDb(credentials.email, pwHash);

        if (!user || !user.password) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          // throw new Error("Invalid credentials.");
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password,
        );
        if (!user.email || !user.password) {
          return null;
        }
        if (isPasswordValid) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
