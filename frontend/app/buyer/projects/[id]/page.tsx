'use client'
import FullCard from '@/components/Fullcard-buyer';
import { Product } from '@/types/product';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const {id} = useParams();
    const [product,setProduct] = useState<Product | null>(null);

    useEffect(()=>{
      fetchProduct();
    },[id])

    const fetchProduct = async() => {
      const res = await axios.get(`http://localhost:8080/products/${id}`);
      if(!res) throw new Error("failed to fetch product");

      setProduct(res.data);
    }

  return (
    <div className='h-screen min-h-screen  max-w-screen'>
        {product && <FullCard {...product}/>}
    </div>
  )
}

export default page