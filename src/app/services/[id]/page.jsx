import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailsPage({ params }) {
    const p = await params;
    const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div>
            <section>
                <figure className='flex justify-center w-full relative'>

                    <Image src={'/assets/images/checkout/checkout.png'} alt={'banner'} width={1137} height={300}></Image>
                </figure>
                <div className='absolute w-full h-full'>

                </div>
            </section>
            <section>
                <Image src={data.img} width={100} height={100}></Image>
                <h1 className='text-xl font-bold'>{data.title}</h1>
            </section>
            <p>{p.id}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
