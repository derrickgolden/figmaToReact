import {useEffect, useRef, useState, useMemo} from 'react';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import PropTypes from 'prop-types'

const InfoSection = ({index, sectionData}) =>{
    const intoViewRef = useRef(null)
    const [animate, setAnimate] = useState(false)
    const isInViewport = useIsInViewport(intoViewRef);
    console.log(isInViewport)
    if(isInViewport && !animate){
        console.log("rendering...")
        setAnimate(isInViewport)
    };

    return(
        <div className={`flex flex-col items-center mb-20  lg-desktop:px-10
        ${ index % 2 == 0 ? "tablet:flex-row": "tablet:flex-row-reverse"} 
        gap-10 tablet:gap-6 lg-desktop:gap-10 justify-start`}>
            <div className=" flex items-center  relative ">
                <img ref={intoViewRef}
                src={sectionData.img} alt='Lady Typing' 
                className='w-full h-full  tablet:w-[850px] object-fill
                lg-desktop:h-auto '/>
                <div className={`flex flex-col gap-1 absolute top-0 
                ${index == 2? "left-0 ": "right-0 "} 
                p-2 tablet:p-3 w-[50%]  opacity-0 
                ${animate? "animate-animImage " : ""}`}>
                    { 
                        sectionData.absImg.map((imgurl, i) =>(
                        <img key={i} src={imgurl} alt="Burner" />
                    )) 
                    }
                </div>
            </div>
            <div className='flex flex-col items-start max-w-[456px] pl-6 pr-3 tablet:pr-10 
            gap-6 lg-desktop:pr-10  justify-start'>
                <h1 className="font-lexend-deca font-bold text-3xl tablet:text-5xl 
                leading-[42px] tablet:leading-[64px] text-darkBlue">
                    {sectionData.title}
                </h1>
                <p className=" font-lexend-deca font-normal text-base tablet:text-lg 
                text-gray">
                    {sectionData.content}
                </p>
                <a href="#" 
                className='flex flex-row items-center gap-4 h-7 font-lexend-deca font-medium
                text-base text-softBlue leading-[150%] pt-10 group '>
                    Learn more 
                <span className='group-hover:animate-ping'><HiOutlineArrowNarrowRight /></span>
                </a>
            </div>
        </div>
    )
}

export default InfoSection;

InfoSection.propTypes = {
    index: PropTypes.number.isRequired,
    sectionData: PropTypes.object.isRequired,
}


function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>

        setIsIntersecting(entry.isIntersecting),
    
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
