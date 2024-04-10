import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDb from "@/lib/connectToDb";
import { User } from "@/lib/models";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

const login = async (credentials) => {
  try {
    connectToDb();

    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("Wrong Credentials ");
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new Error("Wrong Credentials");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};
export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile);
      if (account.provider === "github") {
        try {
          await connectToDb();

          const userExists = await User.findOne({ email: profile.email });
          console.log("User created", userExists);

          if (!userExists) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              image: profile.image,
            });

            await newUser.save();
          }

          redirect("/");
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
  },
};
