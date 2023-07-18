
import { useState } from "react";

import { footerData } from "../assets/dataInfor/footerData";

import { team } from "../assets/images";

const Footer = () =>{
    const [ value, setValue] = useState("")
    const [ showInput, setShowInput] = useState(true);
    const [ isDisabled, setIsDisabled] = useState(false)

    const handleInput =(e) =>{
        setValue(e.target.value)
    }
    const handleEmailSubmit = (e) =>{
        e.preventDefault()

        setValue("Please Wait...")
        setIsDisabled(true)
        setTimeout(() =>{
            setValue("Subscribed")
            setShowInput(false)
        },2000);
    }

    return(
        <div className="flex flex-col lg-desktop:flex-row w-full min-h-[500px] relative
        p-6 tablet:p-20 gap-10 bg-darkBlue text-offWhite font-lexend-deca ">  
            <div className="flex flex-col gap-10 ">
                <div className="w-40">
                    <div className="w-[138px] h-[52px]">
                        <img className="bg-contain "
                        src={team} alt="logo" />
                    </div>
                    <p className="font-normal text-sm tracking-wider">
                        Collaboration platform for mordern team 
                    </p>
                </div>
            </div>
            <div className="flex flex-col mob-landscape:flex-row flex-wrap gap-6 mb-20
            justify-between w-full">
                {Object.keys(footerData).map((key, i) =>{
                    return(
                        <div key={i} 
                        className="flex flex-col gap-2">
                            <h1 className=" h-8 font-normal text-2xl text-softBlue capitalize mb-6">
                               {footerData[key].title}
                            </h1>
                            {footerData[key].details.map((data, i) =>(
                                <a key={data.id} href={data.href}
                                className=" h-6 font-normal text-sm hover:text-softBlue
                                tracking-wide">
                                    {data.name}
                                </a>
                            ))}
                        </div>
                    )
                })}
                <div className="flex flex-col gap-4 -order-1 mob-landscape:order-none">
                    <h1 className=" h-8 font-normal text-2xl text-softBlue mb-4">
                        Stay up to date
                    </h1>
                    <h3 className=" h-6 font-normal text-sm hover:text-softBlue
                    tracking-wide">
                        Subscribe to our newseller.
                    </h3>
                    <form onSubmit={(e) => handleEmailSubmit(e)} 
                    className="text-softBlue relative"
                    >
                        <input type="email" name="email" id="email" placeholder="Email" 
                        onChange={e => handleInput(e)} value={value} disabled={isDisabled} required
                        className="py-2 pl-4 pr-10 rounded bg-lightGray text-offWhite 
                        placeholder:text-offWhite placeholder:font-lexend-deca placeholder:text-sm
                        placeholder:tracking-wide"/>
                        <input type="submit" value="" disabled={isDisabled}
                        className={`absolute right-0 top-0 bottom-0 bg-arrow-right bg-no-repeat 
                          w-8 ${isDisabled? "": "cursor-pointer "} z-20 bg-center bg-lightBlue`} />
                    </form>
                </div>
            </div>
            <p className="absolute bottom-6 h-6 font-normal text-sm tracking-wider align-bottom">
                    © Copyright Team Inc.
            </p>
        </div>
    )
}

export default Footer;









