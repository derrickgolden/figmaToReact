
import { useEffect, useState, useRef } from "react";

import NavMenu from "../components/NavMenu";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Blog = () =>{
    const blogRef = useRef()

    const [blogData, setBlogData] = useState({})
    const [isNext, setIsNext] = useState({start: 0, end: 9})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        var url = 'https://newsapi.org/v2/everything?' +
                  'q=Apple&' + 'language=en&' +
                  'from=2023-07-14&' +
                  'sortBy=popularity&' +
                  'apiKey=592e3097c035444abc5f2c8f1ad28caf';
        
        var req = new Request(url);
        try {
            setIsLoading(true);
            fetch(req)
            .then(res => res.json())
            .then(data => {
                setIsError(false)
                setIsLoading(false)
                setBlogData(data);
                localStorage.setItem("blogData", JSON.stringify(data))
            })
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.error(error);
        }   
    },[])

    const handleNextPrev = () =>{
        blogRef.current.scrollIntoView({ behavior: "smooth", })
        isNext.start == 0? setIsNext({start: 10, end: 16}) : 
                            setIsNext({start: 0, end: 9})
        
    }
        
    return(
        <div className=" w-full px-7 mob-landscape:px-30px 
        tablet:px-[60px] py-[40px]">
            <NavMenu 
            text_col={''}
            bg_col={"bg-offWhite"}
            img_src={"../src/assets/images/dark_team.png"}
            />
            <div className="py-20">
                <h1 className="font-lexend-deca font-bold text-5xl text-darkBlue
                h-16 mb-3">
                    Blog
                </h1>
                <p className="font-lexend-deca font-normal text-base tracking-wide
                 text-darkBlue">
                    Open-source threaded team chat that helps teams stay productive 
                    and focused.
                </p>
            </div>
            {isLoading? <Loader /> : isError? <Error /> : (
                <>
                <div ref={blogRef}
                className="flex flex-wrap gap-7  justify-between">
                    {blogData?.articles?.slice(isNext.start, isNext.end)
                    .map((article, i) =>(
                        <BlogCard 
                        key={i}
                        article={article}
                        />
                    ))}
                </div> 
                <div className="flex flex-row items-center justify-center box-border p-10 
                content-stretch">
                    {
                        blogData?.articles?.length < 10 ? null : (
                            <button onClick={() => handleNextPrev()}
                            className="rounded-md py-3 px-10 bg-lightBlue text-base
                            text-darkBlue font-normal w-[300px]">
                                {isNext.start == 0? "Next" : "Previous"}
                            </button>
                        )
                    }
                </div>
                </>
            )} 
        </div>
    )
}

export default Blog

