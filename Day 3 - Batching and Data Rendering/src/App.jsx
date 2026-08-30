import React, { useState } from 'react'
import ProductsCard from './ProductsCard'

const App = () => {

  console.log("app rendering")
  let [ProductData,setProductsData] = useState([
  {
    "id": 1,
    "title": "Wireless Headphones",
    "description": "Premium wireless headphones with immersive sound and comfortable ear cushions.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    "price": 79.99,
    "category": "Electronics",
    "rating": 4.5
  },
  {
    "id": 2,
    "title": "Smart Watch",
    "description": "Modern smartwatch with fitness tracking, notifications, and health monitoring.",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    "price": 129.99,
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "id": 3,
    "title": "Running Shoes",
    "description": "Lightweight running shoes designed for everyday workouts and maximum comfort.",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    "price": 64.99,
    "category": "Footwear",
    "rating": 4.7
  },
  {
    "id": 4,
    "title": "Leather Backpack",
    "description": "Durable and stylish backpack suitable for work, college, and travel.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "price": 89.99,
    "category": "Accessories",
    "rating": 4.5
  },
  {
    "id": 5,
    "title": "Classic T-Shirt",
    "description": "Soft cotton t-shirt with a comfortable fit for everyday casual wear.",
    "image": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    "price": 24.99,
    "category": "Clothing",
    "rating": 4.3
  },
  {
    "id": 6,
    "title": "Coffee Maker",
    "description": "Compact coffee maker designed to brew rich and flavorful coffee at home.",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "price": 59.99,
    "category": "Home Appliances",
    "rating": 4.6
  },
  {
    "id": 7,
    "title": "Ceramic Vase",
    "description": "Minimalist ceramic vase that adds an elegant touch to any room.",
    "image": "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80",
    "price": 29.99,
    "category": "Home Decor",
    "rating": 4.2
  },
  {
    "id": 8,
    "title": "Sunglasses",
    "description": "Classic sunglasses with a stylish frame and UV protection.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    "price": 39.99,
    "category": "Accessories",
    "rating": 4.4
  },
  {
    "id": 9,
    "title": "Gaming Mouse",
    "description": "High-precision gaming mouse with ergonomic design and responsive controls.",
    "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    "price": 49.99,
    "category": "Gaming",
    "rating": 4.8
  },
  {
    "id": 10,
    "title": "Mechanical Keyboard",
    "description": "Responsive mechanical keyboard with tactile keys and a premium design.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    "price": 94.99,
    "category": "Gaming",
    "rating": 4.7
  },
  {
    "id": 11,
    "title": "Yoga Mat",
    "description": "Non-slip exercise mat providing comfortable cushioning for yoga and workouts.",
    "image": "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
    "price": 34.99,
    "category": "Sports",
    "rating": 4.5
  },
  {
    "id": 12,
    "title": "Stainless Steel Bottle",
    "description": "Insulated reusable bottle designed to keep beverages hot or cold for hours.",
    "image": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80",
    "price": 27.99,
    "category": "Sports",
    "rating": 4.6
  },
  {
    "id": 13,
    "title": "Desk Lamp",
    "description": "Modern adjustable desk lamp providing bright and comfortable workspace lighting.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    "price": 42.99,
    "category": "Home Decor",
    "rating": 4.3
  },
  {
    "id": 14,
    "title": "Portable Speaker",
    "description": "Compact Bluetooth speaker delivering clear audio and powerful bass.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    "price": 54.99,
    "category": "Electronics",
    "rating": 4.6
  },
  {
    "id": 15,
    "title": "Denim Jacket",
    "description": "Classic denim jacket featuring a timeless design and durable construction.",
    "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    "price": 74.99,
    "category": "Clothing",
    "rating": 4.4
  },
  {
    "id": 16,
    "title": "Smartphone Stand",
    "description": "Adjustable phone stand perfect for video calls, streaming, and desk use.",
    "image": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
    "price": 19.99,
    "category": "Accessories",
    "rating": 4.2
  },
  {
    "id": 17,
    "title": "Electric Kettle",
    "description": "Fast-boiling electric kettle with a clean modern design and safety features.",
    "image": "https://images.unsplash.com/photo-1594213114663-d94db9b171ec?auto=format&fit=crop&w=800&q=80",
    "price": 44.99,
    "category": "Home Appliances",
    "rating": 4.5
  },
  {
    "id": 18,
    "title": "Travel Duffel Bag",
    "description": "Spacious travel duffel bag with durable construction for short trips.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "price": 69.99,
    "category": "Travel",
    "rating": 4.6
  },
  {
    "id": 19,
    "title": "Wireless Charger",
    "description": "Minimal wireless charging pad compatible with modern smartphones and devices.",
    "image": "https://images.unsplash.com/photo-1591290619762-c5887e1c0a6c?auto=format&fit=crop&w=800&q=80",
    "price": 25.99,
    "category": "Electronics",
    "rating": 4.3
  },
  {
    "id": 20,
    "title": "Classic Wrist Watch",
    "description": "Elegant analog wrist watch with a timeless design for everyday wear.",
    "image": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
    "price": 119.99,
    "category": "Accessories",
    "rating": 4.7
  }
  ]) 

  const deleteProduct= ((id)=>{
    
    let updatedProducts=ProductData.filter((el)=> el.id!==id)
    setProductsData(updatedProducts)
  })


  return (
    <div>
      <div className='flex flex-wrap'>
        {
          ProductData.map((elem)=>{
            console.log("hi")
            return <ProductsCard key={elem.id} product={elem} del={deleteProduct} />
          })
        }
      </div>
    </div>
  )
}

export default App
