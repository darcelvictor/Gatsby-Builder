import styled from "styled-components"

export const Label = styled.label`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
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
    @media screen and (max-width:${props => props.theme.wrapperWidth}){
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