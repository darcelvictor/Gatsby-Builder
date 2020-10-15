import styled from "styled-components"
import {Link} from 'gatsby'

export const Footer = styled.footer`
text-align:center;
padding-top:30px;
padding-bottom:30px;
text-decoration:none;
background : ${props => props.theme.primary};
color:white;
`

export const LinkFooter=styled(Link)`
text-decoration:none;
color:white;
&:hover{
    color : #aaa;
}
`

export const AFooter=styled.a`
text-decoration:none;
color:white;
&:hover{
    color : #aaa;
}
`