import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import prisma from "../../../prisma/prisma";

export const authOptions = {
  // Prisma adapter
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions);
