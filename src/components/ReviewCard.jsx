
import { register } from 'swiper/element/bundle';

import { BsStarFill } from 'react-icons/bs'

import PropTypes from 'prop-types'

register()
const ReviewCard = ({ index, reviewData}) =>{

    const stars = []
    for(let i = 0; i< Number(reviewData.starsNo); i++){
        stars.push(
        <BsStarFill size={"24px"}
        className=' text-lightOrange'
        />)
    }
    
    return(
       
        <div className="flex flex-col items-start w-[260px] tablet:w-[367px] tablet:mr-4 
        p-8 bg-white gap-6
        drop-shadow-card-shadow ">
            <div className='gap-2'>
                <div className='flex flex-raw items-start h-8 gap-2'>
                    {...stars}
                </div>
                <p className='font-lexend-deca font-normal text-lg text-gray'>
                    {reviewData.review}
                </p>
            </div>
            <div className=' flex flex-row items-center h-14 gap-3'>
                <div className='flex items-center justify-center h-14 w-14'>
                    <img src={reviewData.avator} alt='Avator'/>
                </div>
                <div>
                    <h1 className='h-7 font-lexend-deca font-normal text-base 
                    tablet:text-2xl text-darkBlue'>
                        {reviewData.name}
                    </h1>
                    <p className='font-lexend-deca font-normal text-sm tracking-wide h-6
                    text-desaturatedBlue'>
                        {reviewData.title}
                    </p>
                </div>

            </div>
        </div>
                    
    )
}

export default ReviewCard

ReviewCard.propTypes = {
    reviewData: PropTypes.object,
    index: PropTypes.number
}
