import React from 'react'
import flashsalescards from '../../assets/FlashSalesCards/FlashSalescards.js'

const Flashcard = () => {
    return (
        <div className='flex'>
            {
                flashCards_data.map((card) => (
                    <div>
                        <img src={card.img} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default Flashcard