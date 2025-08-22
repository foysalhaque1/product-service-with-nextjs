import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

export default async function ServiceDetailsPage({ params }) {
    const p = await params;
    const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

    if (!data) {
        return <div className="text-center text-red-500 py-10">Service not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner */}
            

            {/* Service details */}
            <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Service Image */}
                <div className="flex justify-center">
                    <Image
                        src={data.img}
                        alt={data.title}
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-lg object-cover"
                    />
                </div>

                {/* Right: Details */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
                    <p className="text-gray-600">{data.description}</p>

                    <p className="text-2xl font-semibold text-indigo-600">
                        ${parseFloat(data.price).toFixed(2)}
                    </p>

                    {/* Facilities */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Facilities</h3>
                        <ul className="space-y-3">
                            {data.facility?.map((f, i) => (
                                <li
                                    key={i}
                                    className="p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition"
                                >
                                    <p className="font-bold text-gray-700">{f.name}</p>
                                    <p className="text-gray-600 text-sm">{f.details}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Action Button */}
                    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition">
                        Book Service
                    </button>
                </div>
            </section>
        </div>
    );
}
