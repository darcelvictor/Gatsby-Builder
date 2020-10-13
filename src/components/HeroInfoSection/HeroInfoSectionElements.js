import styled from "styled-components"

export const InfoSec = styled.section`
    padding: 160px 0;
    background: #1c2237;
    margin-top: ${({firstSection}) => firstSection ? "-80px" : "0px"};
    @media screen and (max-width: ${props => props.theme.wrapperWidth}){
        padding: 100px 0;
    }
`

export const InfoRow = styled.div`
    display:flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items:center;
    flex-direction: ${({imgStart})=>(imgStart ? 'row-reverse':'row')};

`
export const InfoColumn=styled.div`
     margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex:1;
    max-width:50%;
    flex-basis:50%;
    @media screen and (max-width: ${props => props.theme.wrapperWidth}){
        max-width: 100%;
        flex-basis: 100%;
        display:flex;
        justify-content:center;
    }
`

export const TextWrapper = styled.div`
    max-width: ${(props => props.theme.wrapperWidth)};
    padding-top:0;
    padding-bottom : 60px;
    @media screen and (max-width: ${props => props.theme.wrapperWidth}){
        padding-bottom:65px;
    }
`

export const TopLine = styled.h1` 
    margin-bottom:16px;
    font-size: 1.1rem;
    color:#a9b3c1;
    font-family: ${props => props.theme.secondFont};

`

export const HeadLine= styled.h2`
    color:#fff;
    text-align : left; 
    margin-bottom:48px;
    margin-top:0;
`
export const Subtitle= styled.p`
    text-align : left; 
    margin-bottom:48px;
    color:#a9b3c1;
`


export const ImgWrapper =styled.div`
max-width:550px;
display:flex;
justify-content: ${({imgStart})=> imgStart? 'flex-start':'flex-end'};
@media screen and (max-width: ${props => props.theme.wrapperWidth}){
    justify-content:center;
    }
`

export const Img =styled.img`
max-width:100%;
max-height:500px;
vertical-align: middle;
display:inline-block;
`