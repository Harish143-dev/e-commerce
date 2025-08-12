import React from 'react'
import delivery from "../../assets/icon-delivery.png"
import headphone from "../../assets/icon-headphone.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

const Service = () => {
    return (
        <div className='sm:flex justify-center items-center gap-14 px-10 py-15 mb-10'>
            <div className='flex flex-col justify-center items-center'>
                <div className=' bg-black rounded-full h-15 w-15 mb-4 cursor-pointer flex justify-center items-center border-6 border-gray-300'>
                    <FontAwesomeIcon icon={faTruckArrowRight} className='text-lg text-white' />
                </div>
                <p className='font-semibold'>FREE AND FAST DELIVERY</p>
                <p className='text-sm text-gray-600 font-semibold'>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=' bg-black rounded-full h-15 w-15 mb-4 cursor-pointer flex justify-center items-center border-6 border-gray-300'>
                    <FontAwesomeIcon icon={faHeadphones} className='textlgl text-white' />
                </div>
                <p className='font-semibold'>24/7 Customer Service</p>
                <p className='text-sm text-gray-600 font-semibold'>Friendly 24/7 customer suppoter</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=' bg-black rounded-full h-15 w-15 mb-4 cursor-pointer flex justify-center items-center border-6 border-gray-300'>
                    <FontAwesomeIcon icon={faCheckCircle} className='text-lg text-white' />
                </div>
                <p className='font-semibold'>Money Back Guarantee</p>
                <p className='text-sm text-gray-600 font-semibold'>We return money within 30 days</p>
            </div>
        </div>
    )
}

export default Service