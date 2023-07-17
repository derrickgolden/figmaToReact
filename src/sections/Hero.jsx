
import NavMenu from "../components/NavMenu";
import HeroOffer from "../components/HeroOffer";

const Hero = ({}) =>{

    return(
        <div className=" w-full px-7 mob-landscape:px-30px 
        tablet:px-[60px]  
        py-[40px] h-[780px] mob-landscape:h-[720px] tablet:h-[800px] bg-offWhite
        bg-small-hero-img mob-landscape:bg-md-hero-img desktop:bg-hero-img bg-no-repeat bg-cover bg-center">
            <div className="w-full  ">
                <NavMenu 
                text_col={'text-offWhite'}
                bg_col={'bg-darkBlue'}
                img_src={"../src/assets/images/team.png"}
                />
                <HeroOffer />
            </div>
        </div>
    )
}

export default Hero;
