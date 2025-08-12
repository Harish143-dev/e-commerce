import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faUserAlt, faX, faAngleRight, faBars, faSignOut, faShoppingBag, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faStar, faUser, faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [lang, setlang] = useState(false)
    const [langOpt, setlangOpt] = useState(
        {
            eng: "ENGLISH",
            tam: "TAMIL",
            hin: "HINDI",
        }
    )
    const [langState, setlangState] = useState(langOpt.eng)

    const [userLog, setUserLog] = useState(false)
    const [menuOpen, setmenuOpen] = useState(false)


    return (
        <div>
            <div>

                <div className='bg-black flex justify-end md:gap-50 gap-2 pr-10 items-center py-1'>
                    <p className='text-white text-sm max-sm:text-[10px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% <a href="">ShopNow</a></p>
                    <div className='flex items-center gap-4 w-30'>
                        <p className='text-white cursor-pointer'>{langState}</p>
                        {
                            lang ? <FontAwesomeIcon icon={faAngleUp} className='text-white cursor-pointer' onClick={() => setlang(false)} /> : <FontAwesomeIcon icon={faAngleDown} className='text-white cursor-pointer' onClick={() => setlang(true)} />
                        }
                    </div>
                </div>
                {
                    lang && (
                        <div className='backdrop-brightness-50 backdrop-blur-md rounded-sm w-35 fixed top-13 right-1 z-50 flex flex-col justify-center items-center py-1'>

                            <button className='text-sm font-bold cursor-pointer text-gray-400 my-1' onClick={() => { setlangState(langOpt.eng), setlang(false) }}>{langOpt.eng}</button>
                            <button className='text-sm font-bold cursor-pointer text-gray-400 my-1' onClick={() => { setlangState(langOpt.tam), setlang(false) }}>{langOpt.tam}</button>
                            <button className='text-sm font-bold cursor-pointer text-gray-400 my-1' onClick={() => { setlangState(langOpt.hin), setlang(false) }}>{langOpt.hin}</button>

                        </div>
                    )
                }
                <div className='flex items-center justify-between px-15 py-5 w-full z-50 bg-white navbar shadow-sm'>
                    <div>
                        <h1 className='font-bold text-lg'>EXCLUSIVE</h1>
                    </div>
                    <div>
                        <ul className='hidden sm:flex items-center justify-center gap-10'>
                            <Link to='/' className='text-sm font-semibold cursor-pointer'>Home</Link>
                            <Link to='/about' className='text-sm font-semibold cursor-pointer'>About</Link>
                            <Link to='/contact' className='text-sm font-semibold cursor-pointer'>Contact</Link>
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center justify-center gap-5'>
                        <div className='relative'>
                            <input type="search" className='bg-neutral-100 rounded-sm h-8 px-2 py-1 placeholder:text-sm text-sm placeholder:font-semibold w-60' placeholder='What are you looking for?' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black absolute top-2 right-3' />
                        </div>
                        <div className='flex items-center justify-center gap-5 text-lg relative'>
                            <FontAwesomeIcon icon={faHeart} className='cursor-pointer' />
                            <Link to='/carts'><FontAwesomeIcon icon={faCartShopping} className='cursor-pointer' /></Link>
                            {userLog ? <FontAwesomeIcon icon={faUserAlt} className='cursor-pointer text-red-500' onClick={() => setUserLog(false)} /> : <FontAwesomeIcon icon={faUser} className='cursor-pointer' onClick={() => setUserLog(true)} />}
                        </div>
                        {
                            userLog && (
                                <div className='user_log_container flex flex-col absolute right-15 top-22 z-40 backdrop-brightness-70 backdrop-blur-sm px-8 py-4 gap-4 text-white text-md rounded-lg'>
                                    <div className='flex items-center gap-5 hover:text-red-500 transition-all'>
                                        <FontAwesomeIcon icon={faUser} className='text-lg' />
                                        <a href="">Manage Account </a>
                                    </div>
                                    <div className='flex items-center gap-5 hover:text-red-500 transition-all'>
                                        <FontAwesomeIcon icon={faShoppingBag} className='text-lg' />
                                        <a href="">My Order </a>
                                    </div>
                                    <div className='flex items-center gap-5 hover:text-red-500 transition-all'>
                                        <FontAwesomeIcon icon={faXmarkCircle} className='text-lg' />
                                        <a href="">My Cancellation </a>
                                    </div>
                                    <div className='flex items-center gap-5 hover:text-red-500 transition-all'>
                                        <FontAwesomeIcon icon={faStar} className='text-lg' />
                                        <a href="">My Review </a>
                                    </div>
                                    <div className='flex items-center gap-5 hover:text-red-500 transition-all'>
                                        <FontAwesomeIcon icon={faSignOut} className='text-lg' />
                                        <Link to='/login'>Logout </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='md:hidden'>
                        {menuOpen ? <FontAwesomeIcon icon={faX} onClick={() => setmenuOpen(false)} /> : <FontAwesomeIcon icon={faBars} onClick={() => setmenuOpen(true)} />}
                    </div>
                </div>
                {
                    menuOpen && (
                        <div className='md:hidden backdrop-brightness-30 backdrop-blur-lg w-70 py-5 grow overflow-hidden justify-center items-center absolute z-50 flex flex-col gap-5'>
                            <ul className='flex flex-col px-5 w-full items-center text-center justify-center gap-5'>
                                <Link to='/' className='text-sm rounded-sm bg-black w-full font-semibold py-2 text-white'>Home</Link>
                                <Link to='/about' className='text-sm rounded-sm bg-black w-full font-semibold py-2 text-white'>About</Link>
                                <Link to='/contact' className='text-sm rounded-sm bg-black w-full font-semibold py-2 text-white'>Contact</Link>
                            </ul>
                            <div className='flex items-center flex-col justify-center gap-5'>
                                <div className='relative'>
                                    <input type="search" className='bg-neutral-100 rounded-sm h-8 px-2 py-1 placeholder:text-sm text-sm placeholder:font-semibold w-60' placeholder='What are you looking for?' />
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className='text-black absolute top-2 right-3' />
                                </div>
                                <div className='flex items-center flex-col w-full justify-center gap-2 relative'>
                                    <button className='bg-black w-full py-2 rounded-sm'>
                                        <a href="" className='text-white'><FontAwesomeIcon icon={faHeart} className='px-1' />Whislist</a>
                                    </button>
                                    <button className='bg-black w-full py-2 rounded-sm'>
                                        <Link to="/carts" className='text-white'><FontAwesomeIcon icon={faCartShopping} className='px-1' />Whislist</Link>
                                    </button>

                                </div>
                                <div className='flex flex-col items-center w-full text-center justify-center gap-2 font-bold text-white'>
                                    <a href="" className='w-full bg-black py-2 rounded-sm'>Sign In </a>
                                    <a href="" className='w-full bg-black py-2 rounded-sm'>Sign up </a>
                                </div>
                            </div>
                            <ul className='w-full sm:hidden flex flex-col gap-3 justify-center items-center text-white font-semibold'>
                                <div className='flex gap-10 items-center justify-start font-semibold'>
                                    <li className='cursor-pointer'>Women's Fashion</li>
                                    <FontAwesomeIcon icon={faAngleRight} className='cursor-pointer max-md:rotate-z-90' />
                                </div>
                                <div className='flex gap-14.5 items-center justify-start font-semibold'>
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
                    )
                }
            </div>
        </div>
    )
}

export default Navbar