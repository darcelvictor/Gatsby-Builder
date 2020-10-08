import React from 'react'
import {Container, Button} from '../globalStyle'
import {InfoSec, InfoRow, InfoColumn,TextWrapper} from './InfoSectionElements'


const InfoSection = ({imgStart, topLine,headLine,description}) => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <HeadLine>{headLine}</HeadLine>
                                <Subtitle>{description}</Subtitle>
                                <Button></Button>
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection