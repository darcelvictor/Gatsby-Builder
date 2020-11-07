import styled from "styled-components"


export const SecTitle = styled.h2`
color: white;
text-align:center;
padding:10px 0;
margin:10px 0;
`
export const ExpSection = styled.section`
    padding: 20px 0;
    background: ${props => props.theme.second};
    margin-top: 0;
    @media screen and (max-width: ${props => props.theme.wrapperWidth}){
        padding: 10px 10px;
        margin-top: 0;
    }
`

export const ExpertisesList = styled.ul`
display:flex;
flex-direction: row;
flex-wrap:wrap;
list-style:none;
justify-content:center;
width:100%;
`

export const ExpertiseElement = styled.li`
width: 250px;
margin:20px 20px;
padding: 15px;
background-color:${props => props.theme.senary};
border-radius:5px;
`

export const ExpTitle = styled.h3`
margin-top:0;
text-align:center;
`

export const ExpContent = styled.p`
text-align:center;
`