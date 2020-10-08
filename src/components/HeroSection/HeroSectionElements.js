import styled from "styled-components"


export const HeroContainer = styled.div`
    background-color : blue;
    height:100vh;
    width: 100%;
    display:flex;
    flex-direction : column;
    justify-content: center;
    align-items : center;
    margin-top: ${({firstSection}) => firstSection ? "-80px" : "0px"};
`
export const HeroTitle = styled.h1`
text-align : center;
font-size :100px;
margin-top:0px;
`

export const HeroText = styled.p`
text-align : center;
`
export const HeroBtn = styled.button`
text-align : center;
`