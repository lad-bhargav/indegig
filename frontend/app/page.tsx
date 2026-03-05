'use client'
import { Product } from '@/types/product';
import axios from 'axios';
import { useEffect, useState } from 'react'

const Home = () => {

  const [allProducts,setAllProducts] = useState<Product[]>([]);

  useEffect(()=>{
    fetchProducts();
  },[allProducts]);

  const fetchProducts = async() => {
    try {
      const res = await axios.get("http://localhost:8080/products/all");

      if(!res) throw new Error("No response from server");

      const products = res.data;
      setAllProducts(products);

      console.log("all products loaded");
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>All Products</h1>
      {
        allProducts.map((product)=>(
            <div key={product.id}>
               <p>{product.title}</p>
               <p>{product.description}</p>
               <p>Price: ${product.price.toFixed(2)}</p>
               <p>Delivery Time: {product.deliveringTime} days</p>
               <img src={product.img} alt={product.title} />
            </div>
        ))
      }
    </div>
  )
}

export default Home