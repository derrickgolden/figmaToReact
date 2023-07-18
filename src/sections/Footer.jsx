
import { footerData } from "../assets/dataInfor/footerData";

import { team } from "../assets/images";

const Footer = () =>{

    const handleEmailSubmit = (e) =>{
        console.log(e)
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
                    <form className="text-softBlue relative"
                    onSubmit={(e) => handleEmailSubmit(e)}>
                        <input type="email" name="email" id="email" placeholder="Email" required
                        className="py-2 px-4 rounded bg-lightGray text-offWhite 
                        placeholder:text-offWhite placeholder:font-lexend-deca placeholder:text-sm
                        placeholder:tracking-wide"/>
                        <input type="submit" value=""
                        className="absolute right-0 top-[29%] bg-arrow-right bg-no-repeat
                         h-7 w-8 cursor-pointer" />
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
// /* Email */

// margin: 0 auto;
// width: 39px;
// height: 23px;

// /* Caption */
// font-family: 'Lexend Deca';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 160%;
// /* identical to box height, or 22px */
// display: flex;
// align-items: center;
// letter-spacing: 0.01em;

// /* Off-white */
// color: #F5F5F5;









