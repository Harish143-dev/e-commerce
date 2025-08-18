import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Navbar from '../component/navbar/Navbar';
import Offerslider from '../component/offerSlider/Offerslider';
import Flash from '../component/flash/Flash';
import Category from '../component/category/Category';
import BestSell from '../component/best_selling/BestSell';
import Exploreproduct from '../component/explore/Exploreproduct';
import Newarrival from '../component/new arrival/Newarrival';
import Service from '../component/service/Service';
import Footer from "../component/footer/Footer";
import jbl from '../assets/jblspeaker.png'

const Home = () => {

    return (

        // header in language option section
        <div>
            {/* Nav bar */}
            <Navbar />

            {/* Home main Content */}
            {/* left Align */}
            <div className='md:flex justify-center'>
                <div className='max-sm:hidden w-[30%] md:border-r-2 border-gray-400'>
                    <ul className='w-full flex md:flex-col max-md:gap-3.5 gap-3 max-md:grid-cols-5 items-start pl-20 max-md:pl-3 pt-10 font-semibold'>
                        <div className='md:flex gap-10 items-center justify-start font-semibold'>
                            <li className='cursor-pointer'>Women's Fashion</li>
                            <FontAwesomeIcon icon={faAngleRight} className='cursor-pointer max-md:rotate-z-90' />
                        </div>
                        <div className='md:flex gap-14.5 items-center justify-start font-semibold'>
                            <li className='cursor-pointer'>Men's fashions</li>
                            <FontAwesomeIcon icon={faAngleRight} className='cursor-pointer max-md:rotate-z-90' />
                        </div>
                        <li className='cursor-pointer'>Electronics</li>
                        <li className='cursor-pointer'>Home & lifestyle</li>
                        <li className='cursor-pointer'>Medicence</li>
                        <li className='cursor-pointer'>Sports & Outdoors</li>
                        <li className='cursor-pointer'>Baby's & Toys</li>
                        <li className='cursor-pointer'>Groceries % Pets</li>
                        <li className='cursor-pointer'>Health & beauty</li>
                    </ul>
                </div>
                {/* right align */}
                <div className='w-full pt-10'>
                    <div className='flex justify-center items-center'>
                        {/* row 1 */}
                        <Offerslider />
                    </div>
                </div>
            </div>

            {/* Flash Sales */}
            <div>
                <Flash />
            </div>

            {/* Browse by Category */}
            <div>
                <Category />
            </div>
            <div>
                <BestSell />
            </div>

            {/* JBL Poster */}
            <div className='relative py-10'>
                <div style={{ backgroundImage: `url(${jbl})` }} className='rounded-sm px-10 mx-auto py-20 w-[80%] h-120 bg-cover max-lg:bg-right duration-500'>
                    <div className='flex flex-col gap-10 lg:w-[40%] text-white justify-center items-baseline'>
                        <p className='text-green-600 font-bold'>Categories</p>
                        <p className='text-5xl max-lg:text-3xl font-bold'>Enchance Your Music Experiece</p>
                        <p className='text-3xl max-lg:text-2xl font-bold'>12H : 50M : 30S</p>
                        <button className='bg-green-600 text-sm w-30 h-10 hover:bg-green-700 cursor-pointer font-semibold rounded-sm'>Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Our Explore Products */}
            <div>
                <Exploreproduct />
            </div>

            {/* New Arrival */}
            <div>
                <Newarrival />
            </div>

            {/* service */}
            <div>
                <Service />
            </div>
            {/* Footer Section */}
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home