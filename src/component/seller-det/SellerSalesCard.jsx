
import React from 'react'

const SellerSalesCard = (props) => {
  return (
    <div className='flex flex-col items-center justify-center h-45 w-55 gap-2 px-4 py-3 border-2 border-gray-400 rounded-sm'>
        <div className='w-12 h-12 bg-black text-white flex justify-center items-center border-5 border-gray-400 rounded-full'>
            {props.icon}
        </div>
        <p className='font-bold text-2xl'>{props.sales}</p>
        <p className='text-sm'>{props.content}</p>
    </div>
  )
}

export default SellerSalesCard