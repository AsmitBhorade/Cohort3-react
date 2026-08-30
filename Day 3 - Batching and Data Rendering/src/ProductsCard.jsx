import React from 'react'

const ProductsCard = ({ product,del }) => {

  return (
    <div className='m-4 w-full max-w-[320px] min-h-[520px] border-2 rounded-2xl p-5 flex flex-col gap-4'>
      <div className='w-full h-[250px] overflow-hidden rounded-xl'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='flex flex-col gap-2 flex-1'>
        <h2 className='font-semibold text-2xl break-words'>{product.title}</h2>
        <p className='text-lg'>{product.category}</p>
        <p className='text-green-800 text-lg'>Price : {product.price}</p>

        <p className='break-words leading-relaxed flex-1'>
          {product.description}
        </p>

        <p className='text-blue-700 text-lg'>Rating : {product.rating}</p>
      </div>

      <button onClick={()=>{
        del(product.id)
      }} className='text-[23px] w-full h-12 bg-red-500 rounded-xl text-white font-medium flex items-center justify-center mt-auto'>
        Delete
      </button>
    </div>
  )
}

export default ProductsCard