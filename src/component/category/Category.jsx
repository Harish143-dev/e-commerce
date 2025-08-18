
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import phoneImage from "../../assets/Category-CellPhone.png"
import computerImage from "../../assets/Category-Computer.png"
import watch from "../../assets/Category-SmartWatch.png"
import camera from "../../assets/Category-Camera.png"
import gamepad from "../../assets/Category-Gamepad.png"
import headphome from "../../assets/Category-Headphone.png"

const Category = () => {

    const[categoryToggle, setCategoryToggle] = useState(false)

    return (
        <div className='mt-3 pb-10 flex flex-col'>
            {/* Header */}
            <div className='flex py-2 items-center gap-4 font-bold text-red-500 text-sm sm:mx-18 max-sm:mx-4'>
                <span className='w-4 h-14 rounded-full bg-red-500'></span>
                <p>Categories</p>
            </div>

            {/* Title and Arrows */}
            <div className='flex justify-between items-center mt-3 sm:mx-18 max-sm:mx-4'>
                <div>
                    <p className='text-3xl max-md:text-2xl max-sm:text-lg font-bold'>Browse by Category</p>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faArrowLeft} className='bg-gray-400 hover:bg-gray-200 transition-all hover:text-black p-2 rounded-full text-white cursor-pointer' />
                    <FontAwesomeIcon icon={faArrowRight} className='bg-gray-400 hover:bg-gray-200 transition-all hover:text-black p-2 rounded-full text-white cursor-pointer' />
                </div>
            </div>
            {/* Category */}

            <div className='flex items-center justify-between flex-wrap gap-y-2 px-18 mt-15'>
                <div className={`flex flex-col gap-3 hover:scale-110 transition-all font-bold border-2 w-35 h-35 justify-center items-center rounded-md cursor-pointer border-neutral-400 ${categoryToggle && 'bg-red-500'}`} onClick={()=>setCategoryToggle(!categoryToggle)}>
                    <img src={phoneImage} alt="" />
                    <p className='text-sm'>Mobile</p>
                </div>
                <div className={`flex flex-col gap-3 hover:scale-110 transition-all font-bold border-2 w-35 h-35 justify-center items-center rounded-md cursor-pointer border-neutral-400 ${categoryToggle && 'bg-red-500'}`} onClick={()=>setCategoryToggle(!categoryToggle)}>
                    <img src={computerImage} alt="" />
                    <p className='text-sm'>Computer</p>
                </div>
                <div className={`flex flex-col gap-3 hover:scale-110 transition-all font-bold border-2 w-35 h-35 justify-center items-center rounded-md cursor-pointer border-neutral-400 ${categoryToggle && 'bg-red-500'}`} onClick={()=>setCategoryToggle(!categoryToggle)}>
                    <img src={watch} alt="" />
                    <p className='text-sm'>Smart Watch</p>
                </div>
                <div className={`flex flex-col gap-3 hover:scale-110 transition-all font-bold border-2 w-35 h-35 justify-center items-center rounded-md cursor-pointer border-neutral-400 ${categoryToggle && 'bg-red-500'}`} onClick={()=>setCategoryToggle(!categoryToggle)}>
                    <img src={camera} alt="" />
                    <p className='text-sm'>Camera</p>
                </div>
                <div className={`flex flex-col gap-3 hover:scale-110 transition-all font-bold border-2 w-35 h-35 justify-center items-center rounded-md cursor-pointer border-neutral-400 ${categoryToggle && 'bg-red-500'}`} onClick={()=>setCategoryToggle(!categoryToggle)}>
                    <img src={headphome} alt="" />
                    <p className='text-sm'>Headphone</p>
                </div>
                <div className={`flex flex-col gap-3 hover:scale-110 transition-all font-bold border-2 w-35 h-35 justify-center items-center rounded-md cursor-pointer border-neutral-400 ${categoryToggle && 'bg-red-500'}`} onClick={()=>setCategoryToggle(!categoryToggle)}>
                    <img src={gamepad} alt="" />
                    <p className='text-sm'>Game</p>
                </div>
            </div>

            {/* underlinne */}
            <span className='text-neutral-400 bg-neutral-400 h-[2px] mt-20 w-[90%] mx-auto'>.</span>
        </div>
    )
}

export default Category