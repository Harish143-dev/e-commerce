import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faSitrox } from "@fortawesome/free-brands-svg-icons"
import { faAngleRight, faArrowRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import iphone from '../../assets/iphone.png'
import macbook from '../../assets/macbook.png'
import gamemoniter from '../../assets/gammoniter.png'

const Offerslider = () => {

    const imgData = [
        {
            url: iphone,
            logo: <FontAwesomeIcon icon={faApple} />,
            brand: 'iPhone 16 Series',
            off: '20%'
        },
        {
            url: macbook,
            logo: <FontAwesomeIcon icon={faApple} />,
            brand: 'MacBook Air',
            off: '10%'
        },
        {
            url: gamemoniter,
            logo: <FontAwesomeIcon icon={faSitrox} />,
            brand: 'Samsung Curve Monitor',
            off: '50%'
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? imgData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === imgData.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                prevIndex === imgData.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='w-180 h-75 relative group px-4'>
            <div
                style={{ backgroundImage: `url(${imgData[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500 rounded-sm'
            >
                {
                    imgData[currentIndex].url && (
                        <div className='text-white z-40 flex flex-col gap-5 items-start absolute top-[25%] left-15'>
                            <div className='flex items-center justify-center gap-2'>
                                <span className='text-4xl max-sm:text-2xl'>{imgData[currentIndex].logo}</span>
                                <p className='text-2xl max-sm:text-sm font-semibold pt-2'>{imgData[currentIndex].brand}</p>
                            </div>
                            <div className='sm:text-4xl font-bold'>
                                <p>Get Upto {imgData[currentIndex].off}</p>
                                <p>Offer Voucher</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <a href="#" className='underline max-sm:text-[12px]'>Shop Now</a>
                                <FontAwesomeIcon icon={faArrowRight} className='cursor-pointer max-sm:text-[12px]' />
                            </div>
                        </div>
                    )
                }
            </div>

            {/* Left Arrow */}
            <div
                className='hidden group-hover:block absolute left-10 cursor-pointer text-lg top-[50%] -translate-x-0 translate-y-[-50%] text-white'
                onClick={prevSlide}
            >
                <FontAwesomeIcon icon={faAngleLeft} />
            </div>

            {/* Right Arrow */}
            <div
                className='hidden group-hover:block absolute right-10 cursor-pointer text-lg top-[50%] -translate-x-0 translate-y-[-50%] text-white'
                onClick={nextSlide}
            >
                <FontAwesomeIcon icon={faAngleRight} />
            </div>
        </div>
    )
}

export default Offerslider
