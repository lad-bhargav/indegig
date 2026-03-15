import { Product } from '@/types/product'
import React from 'react'
import { Badge } from './ui/badge'

const FullCard = ({id,title,description,price,deliveringTime,img,sellerId,revisions,sellerEmail,sellerProfileImg,sellerUsername}:Product) => {
  return (
    <div className='h-full max-w-screen flex'>
      <div className='p-2'>
        <img src={img} alt={title} className='w-[90%] h-auto object-cover'/>
        <div className='flex gap-2 ml-5 items-center mt-4'>
            <div className='h-8 w-8 rounded-full overflow-hidden'>
                <img 
                    src={sellerProfileImg} 
                    alt={sellerUsername} 
                    className="w-full h-full object-cover" 
                />
            </div>
        <p className='font-medium'>{sellerUsername}</p>
      </div>
      </div>
      
      <div className='p-2'>
        <h2 className='text-4xl font-bold'>{title}</h2>
        <p className='text-lg mt-2font-light'>{description}</p>
        <Badge variant="secondary">₹{price}</Badge>
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            {deliveringTime} days delivery
        </Badge>
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {revisions} revisions per product
        </Badge>
      </div>
    </div>
  )
}

export default FullCard