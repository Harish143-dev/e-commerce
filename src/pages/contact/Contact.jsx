import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
    return (
        <div>

            {/* nav bar component  */}
            <div>
                <Navbar />
            </div>

            {/* Contact Content */}
            <div className='md:flex justify-center gap-5 px-20 py-20 max-sm:px-10'>
                <div className='flex flex-col items-baseline sm:h-120 max-sm:gap-5 sm:justify-between px-5 py-8 shadow-sm rounded-sm'>
                    <div className='flex flex-col gap-3 '>
                        <div className='pb-3 flex items-center gap-3'>
                            <FontAwesomeIcon icon={faPhone} className='text-white bg-red-500 p-3  rounded-full' />
                            <p className='md:text-lg font-bold'>Call to Us</p>
                        </div>
                        <p className='max-sm:text-sm'>We are available in 24/7</p>
                        <p className='max-sm:text-sm'>+91 9876543210</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='pb-3 flex items-center gap-3'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-white bg-red-500 p-3  rounded-full' />
                            <p className='md:text-lg font-bold'>Write to us</p>
                        </div>
                        <p className='max-sm:text-sm'>Fill out the and we will contact within 24 hours</p>
                        <p className='max-sm:text-sm'>Email : customerexclusive@gmail.com</p>
                        <p className='max-sm:text-sm'>Email : customerexclusive00@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-col h-120 lg:w-350 items-center justify-between gap-4 px-5 py-8 shadow-sm rounded-sm'>
                    <div className='flex max-md:flex-col items-center justify-center gap-5 gap-y-5 w-full'>
                        <input type="text" placeholder='Name' className='bg-gray-200 h-10 w-full px-2 py-2 rounded-sm' />
                        <input type="Email" placeholder='Email' className='bg-gray-200 h-10 w-full px-2 py-2 rounded-sm' />
                        <input type="Phone" placeholder='Number' className='bg-gray-200 h-10 w-full px-2 py-2 rounded-sm' />
                    </div>
                    <div className='w-full'>
                        <textarea placeholder='Message' className='h-40 w-full px-3 py-3 bg-gray-200'></textarea>
                    </div>
                    <div className='flex justify-end w-full'>
                        <button className='w-50 h-12 bg-red-500 rounded-sm text-white font-semibold'>sent a message</button>
                    </div>
                </div>
                <div></div>
            </div>

            {/* Footer Component */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Contact