import React from 'react'
import {MyContainer, MyButton} from '../ParentsComponents'
import {InfoSec, InfoRow, InfoColumn,TextWrapper, TopLine, HeadLine, Subtitle,ImgWrapper,Img} from './HeroInfoSectionElements'


const HeroInfoSection = ({firstSection,imgStart, topLine, headLine, description,description1,description2,buttonLabel,buttonLink,alt,img}) => {
    return (
        <>
            <InfoSec firstSection={firstSection}>
                <MyContainer>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <HeadLine>{headLine}</HeadLine>
                                <Subtitle>{description}<br/>{description1}<br/>{description2}</Subtitle>
                                <MyButton to={buttonLink}>{buttonLabel}</MyButton>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper imgStart={imgStart}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </MyContainer>
            </InfoSec>
        </>
    )
}

export default HeroInfoSection