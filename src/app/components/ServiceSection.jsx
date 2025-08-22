import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default async function ServiceSection() {
    // const res = await fetch('/public/assets/services.json')
    const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
   
    const data = await serviceCollection.find({}).toArray();

  return (
    <div className='grid grid-cols-12 gap-4 container mx-auto my-3'>
      {
        data.map((item)=>{
            return <div className='lg:col-span-4 col-span-12 md:col-span-6 h-full border' key={item._id}>
                <figure className='w-full h-3/4 flex justify-center items-center'>

               <Image className='w-full h-full object-fit' alt={item.title} src={item.img} width={314} height={108}></Image>
                </figure>
                <div className='flex justify-between items-center mt-4 mx-2'>
                    <div className=''>
                        <h2 className='text-[20px] text-black' >{item.title}</h2>
                        <p>Price:${item.price}</p>
                    </div>
                    <Link href={`/services/${item._id}`} className='btn btn-outline'> Details</Link>

                </div>
            </div>
        })
      }
    </div>
  )
}
