import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import { CartContext } from '../../component/context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Carts = () => {
    const { cartItems } = useContext(CartContext);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        if (Object.keys(quantities).length === 0 && cartItems.length > 0) {
            const initialQuantities = {};
            cartItems.forEach((_, index) => {
                initialQuantities[index] = 1;
            });
            setQuantities(initialQuantities);
        }
    }, [cartItems]);

    const counterInFun = (index) => {
        setQuantities(prev => ({
            ...prev,
            [index]: prev[index] + 1
        }));
    };

    const counterDeFun = (index) => {
        setQuantities(prev => ({
            ...prev,
            [index]: Math.max(1, prev[index] - 1)
        }));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item, idx) => {
            const qty = quantities[idx] ?? 1;
            return acc + (item.price * qty);
        }, 0);
    };

    const subtotal = calculateSubtotal();

    return (
        <div>
            <Navbar />

            <div className='flex flex-col gap-5 px-14 py-20 max-sm:px-5'>
                {/* Cart table headers */}
                <div className='flex flex-col gap-3'>
                    <div className='w-full flex items-center justify-center px-10 max-sm:px-2 py-5 rounded-sm shadow-sm'>
                        <p className='w-[25%] text-baseline'>Product</p>
                        <p className='w-[25%] text-center'>Price</p>
                        <p className='w-[25%] text-center'>Quantity</p>
                        <p className='w-[25%] text-end'>Total</p>
                    </div>

                    {/* Cart items */}
                    <div className='flex flex-col gap-5'>
                        {cartItems.map((item, idx) => (
                            <div key={idx} className="mb-2 flex items-center justify-center px-10 max-sm:px-2 py-5 rounded-sm shadow-sm">
                                <p className='w-[25%] text-baseline'>{item.name}</p>
                                <p className='w-[25%] text-center'>₹{item.price}</p>
                                <div className='flex items-center gap-2 w-[25%] justify-center'>
                                    <p className='font-semibold'>{quantities[idx] ?? 1}</p>
                                    <div className='flex flex-col'>
                                        <FontAwesomeIcon icon={faAngleUp} onClick={() => counterInFun(idx)} className='text-gray-400 cursor-pointer' />
                                        <FontAwesomeIcon icon={faAngleDown} onClick={() => counterDeFun(idx)} className='text-gray-400 cursor-pointer' />
                                    </div>
                                </div>
                                <p className='w-[25%] text-end'>₹{item.price * (quantities[idx] ?? 1)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex items-center justify-between'>
                    <button className='border-2 cursor-pointer border-gray-400 hover:bg-red-500 hover:border-0 transition-all hover:text-white rounded-sm h-10 w-50 max-sm:w-30 text-sm font-semibold'>Return to shop</button>
                    <button className='border-2 cursor-pointer border-gray-400 hover:bg-red-500 hover:border-0 transition-all hover:text-white rounded-sm h-10 w-50 max-sm:w-30 text-sm font-semibold'>Update cart</button>
                </div>

                {/* Coupon and Total */}
                <div className='md:flex items-baseline justify-between pt-10'>
                    <div className='flex items-center justify-center gap-5 pb-5'>
                        <input type="text" placeholder='Coupon Code' className='h-10 w-70 border-2 border-gray-400 px-3 py-2 rounded-sm' />
                        <button className='h-10 w-40 bg-red-500 cursor-pointer text-white text-sm font-semibold hover:bg-red-600 transition-all rounded-sm'>Apply Coupon</button>
                    </div>
                    <div className='px-10 py-5 border-2 rounded-sm flex flex-col gap-5 items-baseline'>
                        <p className='font-semibold text-lg'>Cart Total</p>
                        <div className='w-full flex items-center justify-between text-sm'>
                            <p>Subtotal:</p>
                            <p>₹{subtotal}</p>
                        </div>
                        <div className='w-full flex items-center justify-between text-sm'>
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className='w-full flex items-center justify-between text-sm'>
                            <p>Total:</p>
                            <p>₹{subtotal}</p>
                        </div>
                        <div className='w-full text-center'>
                            <button className='bg-red-500 px-5 py-2.5 cursor-pointer rounded-sm text-white font-semibold hover:bg-red-600 transition-all text-sm'>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Carts;
