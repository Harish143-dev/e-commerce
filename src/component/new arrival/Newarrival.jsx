import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Newarrival = () => {

    const arrivalImg = {
        ps5: "src/assets/ps5.png",
        menfashion: "src/assets/menfashion.png",
        speaker: "src/assets/newspeakers.png",
        perfume: "src/assets/perfume.jpeg",
    }

    return (
        <div>
            <div className='flex py-2 max-sm:px-5 items-center gap-4 font-bold text-red-500 text-sm px-18'>
                <span className='w-4 h-14 rounded-full bg-red-500'></span>
                <p>Featured</p>
            </div>

            {/* heading */}
            <div className='px-18 max-sm:px-5 mt-2'>
                <div>
                    <p className='text-3xl max-md:text-2xl max-sm:text-lg font-bold'>New Arrival</p>
                </div>
            </div>
            <div className='px-18 max-sm:px-5 py-12 w-full flex max-sm:flex-col max-lg:flex-col gap-5 justify-between items-center'>
                <div style={{ backgroundImage: `url(${arrivalImg.ps5})` }} className='relative group h-[500px] max-sm:w-full bg-cover bg-no-repeat w-[500px] cursor-pointer rounded-sm'>
                    <div className='flex flex-col gap-2 w-[40%] text-white absolute group-hover:scale-110 transition-all bottom-8 left-10'>
                        <p className='text-2xl font-semibold'>Play Station 5 Pro</p>
                        <p className='text-sm font-semibold text-gray-300'>White Version of Play Station Coming Out</p>
                        <div className='flex gap-2 items-center'>
                            <a href="" className='text-sm underline font-semibold'>Shop Now</a>
                            <FontAwesomeIcon icon={faArrowRight} className='text-sm' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 max-sm:w-full'>
                    <div style={{ backgroundImage: `url(${arrivalImg.menfashion})` }} className='relative group h-[275px] max-sm:w-full w-[650px] bg-cover cursor-pointer rounded-sm'>
                        <div className='flex flex-col gap-2 w-[40%] text-white group-hover:scale-110 transition-all absolute bottom-8 left-10'>
                            <p className='text-2xl font-semibold'>Play Station 5 Pro</p>
                            <p className='text-sm font-semibold text-gray-300'>White Version of Play Station Coming Out</p>
                            <div className='flex gap-2 items-center'>
                                <a href="" className='text-sm underline font-semibold'>Shop Now</a>
                                <FontAwesomeIcon icon={faArrowRight} className='text-sm' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div style={{ backgroundImage: `url(${arrivalImg.speaker})` }} className='relative group h-[200px] w-[300px] bg-cover cursor-pointer rounded-sm'>
                            <div className='flex flex-col gap-2 w-[70%] text-white group-hover:scale-110 transition-all absolute bottom-8 left-6'>
                                <p className='text-lg font-semibold'>Play Station 5 Pro</p>
                                <p className='text-sm font-semibold text-gray-300'>White Version of Play Station Coming Out</p>
                                <div className='flex gap-2 items-center'>
                                    <a href="" className='text-sm underline font-semibold'>Shop Now</a>
                                    <FontAwesomeIcon icon={faArrowRight} className='text-sm' />
                                </div>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${arrivalImg.perfume})` }} className='relative group h-[200px] w-[300px]  bg-cover cursor-pointer rounded-sm'>
                            <div className='flex flex-col gap-2 w-[70%] text-white group-hover:scale-110 transition-all absolute bottom-8 left-6'>
                                <p className='text-lg font-semibold'>Play Station 5 Pro</p>11
                                <p className='text-sm font-semibold text-gray-300'>White Version of Play Station Coming Out</p>
                                <div className='flex gap-2 items-center'>
                                    <a href="" className='text-sm underline font-semibold'>Shop Now</a>
                                    <FontAwesomeIcon icon={faArrowRight} className='text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newarrival