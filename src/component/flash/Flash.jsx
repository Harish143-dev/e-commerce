import { faArrowLeft, faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular, faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useRef, useState } from 'react';
import flashCards_data from '../../assets/FlashSalesCards/FlashSalescards';
import { CartContext } from '../context/CartContext';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Flash = ({ durationInHours = 5, noOfStar = 5 }) => {
    const { addToCart } = useContext(CartContext);
    const [wishlist, setWishlist] = useState({});
    const scrollRef = useRef();

    const [timeLeft, setTimeLeft] = useState(() => {
        const hours = Number(durationInHours);
        return isNaN(hours) ? 0 : hours * 3600;
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleWishlistToggle = (index) => {
        setWishlist(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const scroll = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const formatTime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs}h ${mins}m ${secs}s`;
    };

    const [rating, setRating] = useState(() => {
        const saved = localStorage.getItem('productRatings');
        return saved ? JSON.parse(saved) : {};
    });

    const [hover, setHover] = useState({});

    const handleRatingChange = (index, value) => {
        const updated = {
            ...rating,
            [index]: value
        };
        setRating(updated);
        localStorage.setItem('productRatings', JSON.stringify(updated));
    };

    const handleClearRating = (index) => {
        const updated = { ...rating };
        delete updated[index];
        setRating(updated);
        localStorage.setItem('productRatings', JSON.stringify(updated));
    };

    const handleHover = (index, value) => {
        setHover(prev => ({ ...prev, [index]: value }));
    };

    const handleHoverLeave = (index) => {
        setHover(prev => ({ ...prev, [index]: 0 }));
    };

    return (
        <div className='mt-20 pb-10 flex flex-col'>
            <div className='flex py-2 items-center gap-4 font-bold text-red-500 text-sm sm:mx-18 max-sm:mx-4'>
                <span className='w-4 h-14 rounded-full bg-red-500'></span>
                <p>Today's</p>
            </div>

            <div className='flex justify-between items-center mt-3 sm:mx-18 max-sm:mx-4'>
                <div className='flex gap-5'>
                    <p className='text-3xl max-md:text-2xl max-sm:text-lg font-bold'>Flash Sales</p>
                    <p className='text-3xl max-md:text-2xl max-sm:text-lg font-bold'>{formatTime(timeLeft)}</p>
                </div>
                <div className='flex gap-3'>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={() => scroll("left")} className='bg-gray-400 hover:bg-gray-200 hover:text-black transition-all p-2 rounded-full text-white cursor-pointer' />
                    <FontAwesomeIcon icon={faArrowRight} onClick={() => scroll("right")} className='bg-gray-400 hover:bg-gray-200 hover:text-black transition-all p-2 rounded-full text-white cursor-pointer' />
                </div>
            </div>

            <div ref={scrollRef} className='flex w-[100%] overflow-x-auto pl-18 max-sm:pl-4 scroll_behav'>
                {flashCards_data.map((card, index) => (
                    <div key={index} className='w-[250px] group flex-shrink-0 p-4 rounded-lg transition-all relative'>
                        <div className='w-full flex flex-col h-60 bg-neutral-100 rounded-sm justify-center items-center'>
                            <img src={card.cardsImg} alt={card.name} className='w-[80%] h-full rounded-md object-contain' />
                            <button
                                onClick={() => addToCart(card)}
                                disabled={timeLeft === 0}
                                className={`hidden group-hover:block w-full py-2 cursor-pointer ${timeLeft === 0 ? 'bg-gray-400 text-white' : 'bg-black text-white'}`}
                            >
                                {timeLeft === 0 ? 'Offer Ended' : 'Add to cart'}
                            </button>
                        </div>
                        <div className='mt-2'>
                            <p className='font-semibold text-[15px]'>{card.name}</p>
                            <div className='flex items-center gap-3'>
                                <p className='text-red-500 font-bold text-sm'>₹{card.price}</p>
                                <p className='text-gray-400 text-[12px] font-semibold line-through'>₹{card.orgPrice}</p>
                            </div>
                        </div>
                        <div className='flex gap-1 items-center cursor-pointer'>
                            {[...Array(noOfStar)].map((_, i) => {
                                const starValue = i + 1;
                                const currentRating = rating[index] || 0;
                                const currentHover = hover[index] || 0;
                                const icon = starValue <= (currentHover || currentRating) ? faStarSolid : faStarRegular;
                                return (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={icon}
                                        onClick={() => handleRatingChange(index, starValue)}
                                        onMouseEnter={() => handleHover(index, starValue)}
                                        onMouseLeave={() => handleHoverLeave(index)}
                                        className='text-yellow-400 text-md'
                                    />
                                );
                            })}
                            {rating[index] && (
                                <button
                                    onClick={() => handleClearRating(index)}
                                    className='text-xs text-gray-500 underline ml-2 hover:text-red-500 transition'
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        <div className='absolute top-7 right-8 text-red-500 text-md cursor-pointer rounded-full px-2 py-1'>
                            {wishlist[index] ? (
                                <FontAwesomeIcon icon={faHeartSolid} onClick={() => handleWishlistToggle(index)} />
                            ) : (
                                <FontAwesomeIcon icon={faHeartRegular} onClick={() => handleWishlistToggle(index)} />
                            )}
                        </div>

                        <div className='absolute top-[4.5rem] right-8 text-black text-md cursor-pointer rounded-full px-2 py-1'>
                            <FontAwesomeIcon icon={faEye} />
                        </div>

                        <span className='bg-red-500 w-8 text-center h-5 rounded-sm absolute top-6 left-6 text-[12px] text-white font-semibold'>{card.proOff}</span>
                    </div>
                ))}
            </div>

            <div className='text-center mt-10'>
                <button className='bg-red-500 text-white hover:bg-red-600 transition-all rounded-sm text-sm w-50 h-10 cursor-pointer font-semibold'>View All Product</button>
            </div>

            <span className='text-neutral-400 bg-neutral-400 h-[1.5px] mt-20 w-[90%] mx-auto'>.</span>
        </div>
    );
};

export default Flash;