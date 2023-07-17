
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { getDate } from '../assets/calculations/date'

const BlogCard = ({article}) =>{

    
    return(
        <Link to={`/blog/${article.title}`}
        className='w-[100%] tablet:w-[46%] lg-desktop:w-[31%]'>
            <div className='flex flex-col rounded-lg cursor-pointer
            drop-shadow-card-shadow bg-white justify-between'>
                <div>
                    <div className='w-full h-56 bg-whiteBlue rounded-t-lg'>
                        <img src={article.urlToImage} alt="Burner" 
                        className='h-56 w-full object-cover rounded-t-lg'/>
                    </div>
                    <div className='flex flex-col font-lexend-deca px-4 py-8'>
                        <div className='flex flex-col items-start gap-6'>
                            <h1 className='text-2xl font-normal text-softBlue'>
                                {article.title}
                            </h1>
                            <p className='text-darkBlue text-base tracking-wide'>
                                {article.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center px-4 pb-4 gap-2'>
                    <div className='flex items-center justify-center w-12 h-12'>
                        <img src={article.urlToImage} alt="Avator" 
                        className='w-12 h-12 rounded-full object-cover'/>
                    </div>
                    <p className='font-lexend-deca font-normal text-sm text-desaturatedBlue
                    tracking-wide truncate w-[40%]'>
                        {article.author}
                    </p>
                    <div className='h-6 border border-desaturatedBlue'></div>
                    <p className='font-lexend-deca font-normal text-sm text-desaturatedBlue
                    tracking-wide w-[30%]'>
                        {getDate(article.publishedAt)}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;

BlogCard.propTypes = {
    article: PropTypes.object
}




