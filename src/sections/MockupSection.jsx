
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
const MockupSection = () =>{

    return(
        <div className="flex flex-col-reverse desktop:flex-row items-center lg-desktop:pl-16 py-20 
        pl-8 gap-4  ">
            <div className="flex flex-col items-start desktop:w-[50%] max-w-[624px] 
            lg-desktop:w-[40%] gap-6 pr-8
            ">
                <h1 className="font-lexend-deca font-bold text-3xl tablet:text-5xl 
                leading-[42px] tablet:leading-[64px] text-darkBlue">
                    Chats for your distributed teams
                </h1>
                <p className=" font-lexend-deca font-normal text-base tablet:text-lg text-gray">
                    Team combines the immediacy of real-time chat with an email threading model. 
                    With Team, you can catch up on important conversations while ignoring irrelevant ones.
                </p>
                <a href="#" 
                className='flex flex-row items-center gap-4 h-7 font-lexend-deca font-medium
                text-base hover:underline text-softBlue leading-[150%] pt-10'>
                    Learn more 
                <span className=''><HiOutlineArrowNarrowRight /></span>
                </a>
            </div>
            <div className='hidden mob-landscape:block'>
                <img src="../src/assets/images/mockup.png" alt="Mockup" />
            </div>
            <div className='mob-landscape:hidden'>
                <img src="../src/assets/images/sm-mockup.png" alt="Mockup" />
            </div>
        </div>
    )
}

export default MockupSection










// /* Soft Blue */
// background: #5468E7;



