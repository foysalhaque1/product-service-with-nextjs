"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import bcrypt from "bcrypt"

export const registerUser = async (payload) => {
  const collection = dbConnect(collectionNameObj.usersCollection)
  const { email, password, name, image } = payload

  // check existing user
  const user = await collection.findOne({ email })
  if (user) {
    return { success: false, message: "User already exists with this email" }
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10)

  // new user object
  const newUser = {
    name,
    email,
    image,
    password: hashedPassword,
    role: "user", // default role if you want
    createdAt: new Date(),
  }

  const result = await collection.insertOne(newUser)

  return {
    success: true,
    message: "Registration successful",
    insertedId: result.insertedId.toString(),
  }
}
