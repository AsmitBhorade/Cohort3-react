import React, { useContext } from 'react'
import CartCard from '../Components/CartCard'
import { MyStore } from '../Context/MyContext'

const CartScreen = () => {

  let data=useContext(MyStore)
  let addedItemsInCart=data.cartItem

  return (
    <div className='h-full'>
        hi
      {
        addedItemsInCart
        .filter((item) => item.qty > 0)
        .map((elem)=>{
            return <CartCard key={elem.id} product={elem} />
        })
      }
    </div>
  )
}

export default CartScreen
