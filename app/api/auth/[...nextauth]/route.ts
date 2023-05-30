import User from "@models/user";
import { connectToDB } from "@utils/database";
import NextAuth, { Profile, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

type SessionProps = {
  session: Session;
};

type ProfileProps = {
  profile: Profile;
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const { user } = session || {};

      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({
        email: session.user?.email,
      });

      user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        const { name, email, image } = profile || {};

        // check if user already exists
        const userExists = await User.findOne({
          email: email,
        });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: email,
            username: name?.replace(" ", "").toLowerCase(),
            image,
          });
        }

        return true;
      } catch (error: any) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
