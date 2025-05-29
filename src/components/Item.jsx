import React from 'react'

const Item = (props) => {
  return (
    <div>
    <h1 className='flex  text-2xl justify-center mt-6'>{props.name} </h1>
    <p className='flex justify-center text-2xl'>$ {props.price}</p>
    <div className='flex justify-center mt-6'>
        <button className='text-2xl font-bold bg-blue-600 text-white py-2 px-4 rounded-2xl cursor-pointer mx-2'>Add to Cart</button>
      </div>

  </div>
  )
}

export default Item
