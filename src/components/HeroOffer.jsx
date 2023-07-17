
import { useState } from "react"

const HeroOffer = ({}) =>{
    const [ value, setValue] = useState("Get Early Access")
    const [ showInput, setShowInput] = useState(true);
    const [ isDisabled, setIsDisabled] = useState(false)
    const handleEmailSubmit = (e) =>{
        e.preventDefault()

        setValue("Please Wait...")
        setIsDisabled(true)
        setTimeout(() =>{
            setValue("Submitted. Thank You!")
            setShowInput(false)
        },2000);
    }
    return(
        <div className="flex flex-col items-center mob-landscape:items-start p-0 
        gap-14 absolute top-64 tablet:left-[60px]  pr-7 max-w-[563px]">
            <div className="flex flex-col items-start p-0 gap-4 w-full ">
                <h1 className="font-lexend-deca font-semibold tablet:font-bold text-3xl 
                tablet:text-5xl tablet:leading-[64px] text-offWhite self-stretch">
                    Instant collaboration for remote teams
                </h1>
                <h2 className="font-lexend-deca font-normal text-lg leading-[27px] 
                text-offWhite ">
                    All-in-one place for your remote team to 
                    chat, collaborate and track project progress.
                </h2>
            </div>
            <form onSubmit={e => handleEmailSubmit(e)}
            className="flex flex-col items-center tablet:flex-row tablet:items-start 
            p-0 gap-4 w-full desktop:max-w-[563px] h-auto tablet:h-12">
                { showInput ?
                    <input type="email" placeholder="Email" autoFocus={true} name="email"
                    id="email" required
                    className="box-border flex flex-row justify-between items-center py-3
                    px-4 gap-6 w-full mob-landscape:max-w-72 h-12 bg-offWhite border-2 
                    border-solid border-grayishBlue rounded" /> :
                    null
                }
                <input type='submit' value= {value} disabled ={isDisabled}
                className="flex flex-row justify-center items-center py-[10px] px-11 gap-2 
                w-full mob-landscape:px-0 desktop:max-w-[233px] h-[47px] bg-softBlue 
                rounded text-center text-lg leading-[150%] font-normal font-lexend-deca 
                text-offWhite cursor-pointer" />
            </form>
        </div>
    )
}

export default HeroOffer;


