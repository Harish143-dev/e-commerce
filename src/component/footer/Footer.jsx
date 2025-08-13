import React from 'react'
import qrcode from '../../assets/qr-code.png'
import playstore from '../../assets/GooglePlay.png'
import appstore from '../../assets//AppStore.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='bg-black pt-10 justify-center flex flex-col gap-5'>
            <div className='flex max-lg:items-center  max-lg:flex-col gap-8 px-18 w-full justify-between items-baseline text-gray-300'>
                <div className='flex max-sm:flex-col items-baseline gap-12 justify-between  w-[35%] max-lg:w-full'>
                    <div className='text-sm flex flex-col gap-4'>
                        <p className='font-semibold text-lg pb-3 text-white'>EXCLUSIVE</p>
                        <p>SUBSCRIBE</p>
                        <p>Get 10% Off your first order</p>
                        <div className='w-full flex relative'>
                            <input type="search" className='border-1 absolute border-white rounded-sm w-full h-10 placeholder:text-gray-600 pl-4 placeholder:font-semibold' placeholder='Enter Your Email' />
                            <FontAwesomeIcon icon={faPaperPlane} className='absolute top-2.5 right-3 cursor-pointer  text-gray-600 text-lg' />
                        </div>
                    </div>
                    <div className='text-sm flex flex-col gap-4'>
                        <p className='font-semibold text-lg pb-3 text-white'>Support</p>
                        <p>Arumbakkam, Chennai</p>
                        <p>exclusive2025@gmail.com</p>
                        <p>+91 9876543210</p>
                    </div>
                </div>
                <div className='flex max-sm:flex-col items-baseline gap-5 justify-between w-[55%] max-lg:w-full'>
                    <div className='text-sm flex flex-col gap-4'>
                        <p className='font-semibold text-lg pb-3 text-white'>Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Whistlist</p>
                        <p>Shop</p>
                    </div>
                    <div className='text-sm flex flex-col gap-4'>
                        <p className='font-semibold text-lg pb-3 text-white'>Quick Link</p>
                        <p>Privacy policy</p>
                        <p>Terms of use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                    <div className='text-sm flex text-center flex-col gap-2'>
                        <p className='font-semibold text-lg pb-5 text-white'>Download App</p>
                        <p>Save $3 with App new user only</p>
                        <div className='flex items-center gap-3'>
                            <img src={qrcode} alt="" />
                            <div>
                                <img src={playstore} alt="" />
                                <img src={appstore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center text-gray-600 py-5 border-t-1 font-semibold border-gray-600'>
                <p>Copyrights Harish2025 All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer