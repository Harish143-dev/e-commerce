import React, { useRef } from 'react'
import EmpCards from "../../component/emp_details/EmpCards"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const EmpDetail = () => {


    const scrollRef = useRef()

    const scroll = (direction) => {
        if (direction === 'left') {
            scrollRef.current.scrollBy({ left: -1500, behavior: "smooth" })
        }
        else {
            scrollRef.current.scrollBy({ left: 1500, behavior: 'smooth' })
        }
    }

    return (
        <div>
            <div ref={scrollRef} className='flex overflow-x-scroll gap-30 px-20 mt-10 scroll_behav'>
                <div>
                    <EmpCards />
                </div>
                <div>
                    <EmpCards />
                </div>
            </div>
            <div className='flex justify-center items-center gap-20 py-15'>
                <FontAwesomeIcon icon={faArrowLeft} onClick={()=> scroll('left')} className='bg-gray-400 p-3 cursor-pointer hover:bg-gray-300 text-white  rounded-full text-xl' />
                <FontAwesomeIcon icon={faArrowRight} onClick={() => scroll('right')} className='bg-gray-400 p-3 cursor-pointer hover:bg-gray-300 text-white  rounded-full text-xl' />
            </div>
        </div>  
    )
}

export default EmpDetail