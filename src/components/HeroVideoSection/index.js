import React from 'react'
import {HeroContainer,HeroBg,VideoBg} from "./HeroVideoSectionElements"
import Video from "../../video/video.mp4"


const HeroVideoSection = ({firstSection}) => {
    return(
       <HeroContainer firstSection={firstSection}>
           <HeroBg>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
           </HeroBg>
       </HeroContainer>
    )
}

export default HeroVideoSection;