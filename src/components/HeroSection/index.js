import React, {Fragment} from 'react'
import {HeroContainer,HeroTitle,HeroText, HeroBtn} from "./HeroSectionElements"


const HeroSection = ({title, text, textBtn, firstSection}) => {
    return(
       <HeroContainer firstSection={firstSection}>
            <HeroTitle>{title}</HeroTitle>
            <HeroText>{text}</HeroText>
            {textBtn? <HeroBtn>{textBtn}</HeroBtn>: <Fragment/>}
       </HeroContainer>
    )
}

export default HeroSection;