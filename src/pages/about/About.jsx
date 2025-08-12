import React from 'react'
import Navbar from "../../component/navbar/Navbar"
import Service from "../../component/service/Service"
import Footer from '../../component/footer/Footer'
import SellerSales from '../../component/seller-det/SellerSales'
import aboutImg from '../../assets/aboutImg.jpg'
import EmpDetail from '../../component/emp_details/EmpDetail'

const About = () => {
    return (
        <div>
            {/* Nav bar */}
            <div>
            </div>
                <Navbar />
            {/* Main content */}
            <div className='flex max-md:flex-col-reverse items-center justify-between pt-10'>
                <div className='md:w-[50%] flex flex-col items-baseline justify-center px-28 gap-3'>
                    <p className='font-semibold text-4xl mb-5'>Our Story</p>
                    <p className='text-gray-500 text-sm font-semibold'>
                        Launced in 2015, Exclusive is South Asia's premier online shopping
                        makterplace with an active presense in Bangladesh. Supported
                        by wide range of tailored marketing, data and service solutions,
                        Exclusive has 10,500 sallers and 300 brands and serves 3
                        millioons customers across the region.
                    </p>
                    <p className='text-gray-400 text-sm font-semibold'>
                        Exclusive has more than 1 Million products to offer, growing at a
                        very fast. Exclusive offers a diverse assotment in categories
                        ranging from consumer.
                    </p>
                </div>
                <div className='md:w-[50%] px-10'>
                    <img src={aboutImg} alt="" className='rounded-l-md' />
                </div>
            </div>

            <div>
                <SellerSales />
            </div>

            {/* Employees Details Component */}
            <div>
                <EmpDetail />
            </div>

            {/* sevices Component */}
            <div>
                <Service />
            </div>
            
            {/* footer Component */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default About