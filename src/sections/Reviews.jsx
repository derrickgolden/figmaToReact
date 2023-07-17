
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { reviewsData } from '../assets/dataInfor/reviewsData'
import ReviewCard from '../components/ReviewCard'
import { useRef, useState } from 'react';

// register Swiper custom elements
register();
const Reviews = () =>{
    
    const swiperRef = useRef()
    const [isPrev, setIsPrev] = useState(false)
    const [isNext, setIsNext] = useState(true)

    const handleSlideChange = (swiper) =>{
        setIsPrev(!swiper.isBeginning)
        setIsNext(!swiper.isEnd)
    }

    return(
        <div className='px-4 tablet:px-10 desktop:px-20 py-20'>
            <h1 className=' font-lexend-deca font-bold text-3xl tablet:text-4xl text-center
            text-darkBlue'>
                What people say about Team
            </h1>
            
            <div className='flex flex-row gap-4 tablet:gap-7 pt-20 pb-10'>
                <Swiper
                spaceBetween={16}
                slidesPerView='auto'
                freeMode
                centeredSlides
                centeredSlidesBounds
                modules={[FreeMode]}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                onSwiper={(swiper) =>  {
                    swiperRef.current = swiper;
                  }}
                >
                    {reviewsData.map((reviewData, i) =>(
                    <SwiperSlide key={i}
                    style={{ width: 'auto', height: 'auto' }}>
                        <ReviewCard 
                        index={i}
                        reviewData={reviewData}
                        />
                        </SwiperSlide>
                        ))}
                </Swiper>
            </div>
            <div className='flex flex-row justify-end gap-8 '>
                <div className='h-8 w-8'>
                    {isPrev? <AiOutlineArrowLeft className='text-softBlue w-8 h-8 cursor-pointer'
                    onClick={() => swiperRef.current.slidePrev()}/> : null }
                </div>
                <div className='h-8 w-8'>
                    {isNext? <AiOutlineArrowRight className='text-softBlue w-8 h-8 cursor-pointer'
                    onClick={() => swiperRef.current.slideNext()}/> : null }
                </div>
            </div>
        </div>
    )
}




export default Reviews;


