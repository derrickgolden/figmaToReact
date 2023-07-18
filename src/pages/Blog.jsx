
import { useState, useRef } from "react";

import { darkTeam } from "../assets/images";
import { blogDatas } from "../assets/fetchData";

import NavMenu from "../components/NavMenu";
import BlogCard from "../components/BlogCard";

const Blog = () =>{
    const blogRef = useRef()

    const [blogData, setBlogData] = useState((blogDatas))
    const [isNext, setIsNext] = useState({start: 0, end: 9})

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
            img_src={darkTeam}
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
            <div ref={blogRef}
                className="flex flex-wrap gap-7  justify-between">
                    {blogData?.slice(isNext.start, isNext.end)
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
        </div>
    )
}

export default Blog

