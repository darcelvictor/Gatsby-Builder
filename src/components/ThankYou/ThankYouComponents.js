import styled from "styled-components"
import {MyContainer} from "../ParentsComponents"

export const SectionContact = styled.section`
width:100vw;
height:100vh;
min-height:800px;
display:flex;
background-color : ${props => props.theme.second};
align-items:center;
justify-content:center;
margin-top:-80px;
`

export const ContainerContact = styled(MyContainer)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
min-height:800px;
`

export const H1Contact = styled.h1`
text-decoration:none;
color: white;
text-align:center;
`
export const PContact = styled.p`
text-decoration:none;
color: white;
text-align:center;
line-height:1.5rem;
padding-bottom:10px;
`