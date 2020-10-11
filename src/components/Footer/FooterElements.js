import styled from "styled-components"
import {Link} from 'gatsby'

export const Footer = styled.footer`
height:80px;
display:flex;
align-items:center;
justify-content:center;
text-decoration:none;
background : #101522;
color:white;
`

export const LinkFooter=styled(Link)`
text-decoration:none;
margin-left:10px;
color:white;
&:hover{
    color : #aaa;
}
`