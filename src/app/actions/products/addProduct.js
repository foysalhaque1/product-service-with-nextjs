"use server"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const addProduct = async (payload) => {
  try {
    const productCollection = dbConnect(collectionNameObj.servicesCollection) 
    const result = await productCollection.insertOne(payload)

    return {
      success: true,
      message: "Product saved",
      insertedId: result.insertedId.toString(),
    }
  } catch (error) {
    console.error("Error inserting product:", error)
    return { success: false, message: "Failed to save product" }
  }
}
