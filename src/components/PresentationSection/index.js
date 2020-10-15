import React from 'react'
import {MyContainer} from '../ParentsComponents'
import {InfoSec,TopLine,HeadLine,Subtitle} from './PresentationSectionElements'


const PresentationSection = ({firstSection}) => {
    return (
        <>
            <InfoSec firstSection={firstSection}>
                <MyContainer>
                    <TopLine>Qui sommes nous ?</TopLine>
                    <HeadLine>Des artisans du web</HeadLine>
                    <Subtitle>Digital Project c'est des jeunes passionés, aux services de vos besoins digitaux.<br/>Nous travaillons avec des experts en marketing, en design et en programmation.<br/>Nous vous accompagnons dans la mise en place de statégie digital adaptée à vos besoins.</Subtitle>
                </MyContainer>
            </InfoSec>
        </>
    )
}

export default PresentationSection