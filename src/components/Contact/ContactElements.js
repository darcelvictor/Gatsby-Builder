import styled from "styled-components"

export const Label= styled.label`
display: flex;
flex-direction: column;
padding-bottom: 20px;
`
export const LabelRgpd = styled.label`
display: flex;
align-items: center;
flex-direction: row;
`

export const Form = styled.form`
justify-content:flex-end;
align-items:flex-end;
`

export const Input = styled.input`
border : 2px solid;
height: 30px;
`
export const Textarea = styled.textarea`
border : 2px solid;
`

export const InputBtn = styled.input`
    color : #fff;
    align-self:center;
    text-align:center;
    justify-content:center;
    background-color : ${props => props.theme.quaternary};
    text-decoration:none;
    padding: 1rem 2rem;
    border : 2px solid ${props => props.theme.quaternary};
    border-radius: 4px;
    &:hover{
        color:${props => props.theme.quinary};
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
            color:${props => props.theme.quinary};
            transition :  0.3s All ease;
        }
    }
`
