import React from 'react'
import { emp_cards } from '../../assets/FlashSalesCards/FlashSalescards'

const EmpCards = () => {


  return (
    <div className='flex justify-center gap-20'>
      {
        emp_cards.map((card, index) => (
          <div key={index} className='w-60 flex flex-col items-center gap-5'>
            <img src={card.emp_img} alt="" className='h-50 w-40 bg-gray-200' />
            <div className='flex flex-col items-baseline'>
              <p>{card.emp_name}</p>
              <p>{card.emp_role}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default EmpCards