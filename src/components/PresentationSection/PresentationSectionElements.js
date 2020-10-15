import styled from "styled-components"

export const InfoSec = styled.section`
    padding: 160px 0;
    background: ${props=>props.theme.senary};
    margin-top: ${({firstSection}) => firstSection ? "-80px" : "0px"};
    @media screen and (max-width: ${props => props.theme.wrapperWidth}){
        padding: 40px 0;
        margin-top: 0;
    }
`

export const TopLine = styled.p` 
    margin-bottom:16px;
    font-size: 1.1rem;
    color:${props=>props.theme.primary};
    font-family: ${props => props.theme.secondFont};
    text-align:center;

`

export const HeadLine= styled.h2`
    color:${props=>props.theme.secondary};
    text-align : left; 
    margin-bottom:48px;
    margin-top:0;
    text-align:center;
`
export const Subtitle= styled.p`
    text-align : left; 
    margin-bottom:48px;
    color:${props=>props.theme.primary};
    text-align:center;
`

