
import { useParams } from "react-router-dom"

import { useState, useEffect, useRef } from "react"

import NavMenu from "../components/NavMenu"
import Error from "../components/Error"
import Loader from "../components/Loader"

import { getDate } from "../assets/calculations/date"
import { fetchData } from "../assets/fetchData"
import { darkTeam } from "../assets/images"

const BlogPost = ({}) =>{
    const scrollRef = useRef()

    const {id} = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    
    useEffect(() =>{
        scrollRef.current.scrollIntoView({behavior: "smooth"})
        
        setIsLoading(true)
        fetchData(id).then(res => {
            console.log(res)
            setIsLoading(false)
            setIsError(false)
            setArticle(res)
        }).catch(err => {
            setIsLoading(false)
            setIsError(true)
            console.log("something wet wrong")
        })
    },[id]);
   
    return(
        <div ref={scrollRef}
        className=" w-full px-7 mob-landscape:px-30px tablet:px-[60px] py-[40px]">
            <NavMenu 
            text_col={''}
            bg_col={"bg-offWhite"}
            img_src={darkTeam}
            />
            {
                isLoading? <Loader /> : isError? <Error /> :
                <Post 
                article={article}
                />
            }
        </div>
    )
}

 const Post = ({article}) =>{
    return(
        <div className="mt-28">
                <div className="flex items-center justify-center pb-12">
                    <div className="max-w-[764px]">
                        <h1 className="font-lexend-deca text-3xl tablet:text-[50px] font-bold 
                        tablet:leading-[64px] text-darkBlue">
                            {article?.title}
                        </h1>
                        <div className='flex items-center py-12 pb-4 gap-2'>
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
                </div>
                <div className="flex items-center justify-center lg-desktop:px-[3%]" >
                    <img src={article.urlToImage} alt="Burner" 
                    className="max-h-[500px]  "/>
                </div>
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="max-w-[764px] text-lg font-normal font-lexend-deca 
                    text-darkGray">
                        {article.content}
                    </div>
                    <div className="flex flex-row items-center justify-center box-border p-10">
                        <a href={article.url}
                        className="rounded-md py-3 px-0 tablet:p-6 bg-lightBlue text-base
                        text-darkBlue font-normal w-[180px] tablet:w-[300px] text-center">
                            Visit Official Website
                        </a>
                    </div>
                </div>
        </div>
    )
}
export default BlogPost


