import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeartCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { best_sell } from '../../assets/FlashSalesCards/FlashSalescards'

const BestSell = () => {

    const [wishlist, setWishlist] = useState({})

    const handleWishlistToggle = (index) => {
        setWishlist((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className='mt-10 pb-10 flex flex-col'>
            {/* Header */}
            <div className='flex py-2 items-center gap-4 font-bold text-red-500 text-sm px-18'>
                <span className='w-4 h-14 rounded-full bg-red-500'></span>
                <p>Today's</p>
            </div>

            {/* heading */}
            <div className='flex justify-between items-center px-18 mt-2'>
                <div>
                    <p className='text-3xl max-md:text-2xl max-sm:text-lg font-bold'>Best Selling Product</p>
                </div>
                <div>
                    <button className='px-5 py-2 cursor-pointer hover:bg-red-600 transition-all rounded-sm text-sm font-semibold text-white bg-red-500'>View All</button>
                </div>
            </div>

            {/* Category */}
            <div className='flex items-center justify-center w-full px-14'>
                <div className='flex flex-wrap max-md:justify-center pt-12 justify-between w-full'>
                    {
                        best_sell.map((card, index) => (
                            <div key={index} className='w-[250px] group p-4 rounded-lg relative'>
                                <div className='w-full flex flex-col h-60 bg-neutral-100 rounded-sm justify-center items-center'>
                                    <img src={card.cardsImg} alt={card.name} className='w-[80%] h-full object-contain rounded-md' />
                                    <button className='hidden group-hover:block bg-black text-white w-full py-2 cursor-pointer'>Add to cart</button>
                                </div>
                                <div className='mt-2'>
                                    <p className='font-semibold text-[15px]'>{card.name}</p>
                                    <div className='flex items-center gap-3'>
                                        <p className='text-red-500 font-bold text-sm'>₹{card.price}</p>
                                        <p className='text-gray-400 font-bold text-[12px] line-through'>₹{card.orgPrice}</p>
                                    </div>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <div>
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-md' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-md' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-md' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-md' />
                                        <FontAwesomeIcon icon={faStar} className='text-yellow-400 text-md' />
                                    </div>
                                    <p className='text-[12px]'>{card.rateNO}</p>
                                </div>
                                <div className=' absolute top-7 right-8 text-red-500 text-md cursor-pointer rounded-full px-2 py-1'>
                                    {
                                        wishlist[index] ?
                                            <FontAwesomeIcon icon={faHeartCircleCheck} onClick={() => handleWishlistToggle(index)} /> :
                                            <FontAwesomeIcon icon={faHeart} onClick={() => handleWishlistToggle(index)} />
                                    }
                                </div>
                                <div className=' absolute top-18 right-8 text-black text-md cursor-pointer rounded-full px-2 py-1'>
                                    <FontAwesomeIcon icon={faEye} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BestSell