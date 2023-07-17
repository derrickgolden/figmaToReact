
import Hero from "../sections/Hero"
import MockupSection from "../sections/MockupSection"
import InfoSection from "../sections/InfoSection"
import Reviews from "../sections/Reviews"

import { infoSectionData } from "../assets/dataInfor/infoSection"

const Home = () =>{

    return(
      <>
        <Hero />
        <MockupSection />
          {infoSectionData.map((sectionData, i) =>(
            <InfoSection 
              key={i}
              index={i}
              sectionData={sectionData}
            />
          ))}
          <Reviews />
      </>
    )
  }

  export default Home 
