import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import loginBgImg from '../../assets/login.jpg'

const Login = () => {

    const [loginState, setLoginState] = useState("Create an Account")

    return (
        <div>
            {/* Login Details */}
            <div style={{backgroundImage : `url(${loginBgImg})`}} className='h-screen bg-cover bg-center bg-no-repeat relative flex justify-center items-center'>
                <div className='flex flex-col justify-center items-baseline gap-10 px-30'>
                    <div className='flex flex-col items-baseline gap-2'>
                        <p className='text-2xl font-semibold'>{loginState === 'Create an Account' ? loginState : "Login"}</p> <></>
                        <p>Enter your  details below</p>
                    </div>
                    <div className='flex flex-col items-baseline gap-5'>
                        {
                            loginState === 'Create an Account' && <input type="text" placeholder='Name' className='w-80 outline-0 border-b-2 border-gray-400 px-3 py-2' />
                        }
                        <input type="text" placeholder='Email or Phone number' className='w-80 outline-0 border-b-2 border-gray-400 px-3 py-2' />
                        <input type="text" placeholder='Password' className='w-80 border-b-2 outline-0 border-gray-400 px-3 py-2' />
                    </div>
                    <div className='flex flex-col items-baseline justify-center gap-5 w-full'>
                        <Link to = '/' className='w-full'><button className='w-full bg-red-500 h-12 rounded-sm text-white cursor-pointer '>{loginState}</button></Link>
                        <button className='w-full border-2 border-gray-300 h-12 rounded-sm text-gray-400 cursor-pointer '>Sign in with google</button>
                    </div>
                    <div>
                        {loginState === "Create an Account" && <p>Already have a account <span className='font-semibold underline cursor-pointer' onClick={() => setLoginState('Login')}>Login</span></p>}
                        {loginState === "Login" && <p>Create new a account <span className='font-semibold underline cursor-pointer' onClick={() => setLoginState('Create an Account')}>SignUp</span></p>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login