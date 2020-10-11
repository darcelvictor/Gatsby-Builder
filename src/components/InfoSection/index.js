import React from 'react'
import {MyContainer, MyButton} from '../ParentsComponents'
import {InfoSec, InfoRow, InfoColumn,TextWrapper, TopLine, HeadLine, Subtitle} from './InfoSectionElements'


const InfoSection = ({imgStart, topLine, headLine, description}) => {
    return (
        <>
            <InfoSec>
                <MyContainer>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <HeadLine>{headLine}</HeadLine>
                                <Subtitle>{description}</Subtitle>
                                <MyButton to="/">Contactez-nous</MyButton>
                            </TextWrapper>
                        </InfoColumn>
                       
                    </InfoRow>
                </MyContainer>
            </InfoSec>
        </>
    )
}

export default InfoSection