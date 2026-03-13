'use client'
import ProductCard from '@/components/ProductCard';
import { useCurrentUser } from '@/hooks/useCurrUser';
import { Product } from '@/types/product';
import axios from 'axios';
import { useEffect, useState } from 'react'

const page = () => {
  const [allProducts,setAllProducts] = useState<Product[]>([]);
  const {clerkId} = useCurrentUser();

  useEffect(()=>{
    fetchProducts();
  },[allProducts]);

  const fetchProducts = async() => {
    try {
      const res = await axios.get(`http://localhost:8080/products/seller/${clerkId}`);

      if(!res) throw new Error("No response from server");

      const products = res.data;
      setAllProducts(products);

      console.log("all products loaded");
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='min-h-screen max-w-screen flex flex-row flex-wrap items-start'>
      {
        allProducts.map((product)=>(
            <ProductCard
              key={product.id} 
              sellerId={product.sellerId}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              deliveringTime={product.deliveringTime}
              img={product.img}
            />
        ))
      }
    </div>
  )
}

export default page