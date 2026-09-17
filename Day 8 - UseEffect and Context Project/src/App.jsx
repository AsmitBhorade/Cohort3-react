import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Components/Navbar'
import ProductCards from './Components/ProductCards'
import CartScreen from './Pages/CartScreen'
import { MyStore } from './Context/MyContext'

const App = () => {

  const [productsData, setproductsData] = useState([]) // to store the data coming 
                                                       // from below Api


  let {isCartOpen,cartItem}=useContext(MyStore)

  const getProductsData=async ()=>{
   try{
    let response= await axios.get("https://fakestoreapi.com/products")
    console.dir(response)
    setproductsData(response.data)  // this storing of data can only be done by usestate in react
   }
   catch(error){console.log("Error in Api",error)} 
  }

  useEffect(()=>{
    getProductsData() // here we use useEffect to render it only once to prevent 
                      // infinite loop
  },[])

  return (
    <div className='flex flex-col gap-4'>
      <Navbar />
      {
        isCartOpen? <CartScreen /> :  // addedItemsInCart is name given by me
        (
          <div className='grid grid-cols-4 gap-4'>
          {
            productsData.map((elem)=>{
              const isInCart=cartItem.find((val)=> val.id===elem.id)

            return <ProductCards key={elem.id} product={elem} isInCart={isInCart} />
          })
      }
      </div>
        )
      }

    </div>
  )
}

export default App
