import React from 'react'

export default function Productcard({ data, img }) {
  return (
    <div className='shadow-md m-4 p-3 text-sm flex flex-col gap-2 bg-white rounded-xl'>
      
      <img 
        src={img} 
        className='mx-auto h-32 object-cover' 
        alt="product" 
      />

      <span className='text-gray-500'>8 mins</span>

      <div className='font-semibold'>
        {data.name}
      </div>

      <span className='text-gray-600'>
        {data.quantity}
      </span>

      <div className='flex justify-between items-center'>
        <span className='font-bold'>₹ {data.price}</span>

        <button className='bg-green-500 text-white px-3 py-1 rounded-xl'>
          Add
        </button>
      </div>

    </div>
  )
}

