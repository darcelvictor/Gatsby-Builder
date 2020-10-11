import {Link} from 'gatsby'
import styled from "styled-components"

export const MyContainer = styled.div`
z-index: 1;
width: 100%;
max-width:${props => props.theme.maxWidth};
margin-left:auto;
margin-right:auto;
padding-left:50px;
padding-right:50px;
@media screen and (max-width: ${props => props.theme.maxWidth})
{
    padding-left: 30px;
    padding-right: 30px;
}
`

export const MyButton = styled(Link)`
    color : #fff;
    align-self:center;
    text-align:center;
    background-color : ${props => props.theme.quaternary};
    text-decoration:none;
    padding: 1rem;
    border : 2px solid ${props => props.theme.quaternary};
    border-radius: 4px;
    &:hover{
        color:#efefef;
        transition :  0.3s All ease;
        background-color : transparent;
    }
    @media screen and (max-width:${props => props.theme.maxWidth}){
        text-align: center;
        align-self: center;
        margin-left:auto;
        margin-right:auto;
        padding : 1rem;
        width: 100%;
        display: table;
        &:hover{
            color:#efefef;
            transition :  0.3s All ease;
        }
    }
`