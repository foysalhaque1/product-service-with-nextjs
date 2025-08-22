"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const signinUser = async (payload) => {
  const { email, password } = payload;
  const userCollection = dbConnect(collectionNameObj.usersCollection);

  const user = await userCollection.findOne({ email });
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    image: user.image,
  };
};
