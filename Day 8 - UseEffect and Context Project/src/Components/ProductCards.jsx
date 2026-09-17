import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext';

const ProductCards = ({product,isInCart}) => {

  let {setcartItem,incrementqty,decrementqty}=useContext(MyStore)

    const addToCart = ()=> {
        setcartItem((prev)=>[...prev,{...product,qty:1}]) // we want qty field in cartitem.qty
        alert("Product added to Cart")                  // for functionality of + and -
    }
  return (
    <section className="bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex h-72 items-center justify-center bg-white p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="p-5">
          <p className="mb-2 text-sm capitalize text-gray-500">
            {product.category}
          </p>

          <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
            {product.title}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>

            <span className="text-sm text-yellow-500">
              ★ {product.rating.rate} ({product.rating.count})
            </span>
          </div>

          {isInCart && isInCart.qty>0?( 
             <div className="mt-5 flex w-full items-center justify-center gap-8 rounded-2xl bg-gray-400">
            <button
              onClick={() => decrementqty(product.id)}
              className="text-4xl"
            >
              -
            </button>

            <span className="text-2xl">{isInCart.qty}</span>

            <button
              onClick={() => incrementqty(product.id)}
              className="text-4xl"
            >
              +
            </button>
          </div>
          )
          :(
          <button 
          onClick={addToCart}
          className="mt-5 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Add to Cart
          </button> )}
        </div>
      </div>
    </section>
  );
};

export default ProductCards
