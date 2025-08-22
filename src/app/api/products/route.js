import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(
            JSON.stringify({ message: "Unauthorized" }),
            { status: 401 }
        );
    }

    const body = await req.json();
    const { name, price, description, createdBy } = body;

    if (!name || !price) {
        return new Response(
            JSON.stringify({ message: "Name and Price required" }),
            { status: 400 }
        );
    }

    const productsCollection = dbConnect(collectionNameObj.productsCollection);

    const product = await productsCollection.insertOne({
        name,
        price,
        description,
        createdBy,
        createdAt: new Date(),
    });

    return new Response(
        JSON.stringify({ message: "Product added", id: product.insertedId }),
        { status: 201 }
    );
}
