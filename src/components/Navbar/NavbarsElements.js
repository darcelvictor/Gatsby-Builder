import styled from "styled-components"
import { Link } from "gatsby"
import {MyContainer} from "../ParentsComponents"

export const Nav = styled.nav`
    background: ${props => props.theme.primary};
    height: 80px;
    display: flex;
    position:sticky;
    font-size:1rem;
    justify-content: center;
    align-items:center;
    top:0;
    z-index:999;
    @media screen and (max-width: ${props => props.theme.maxWidth})
    {
        background: ${props => props.theme.primary};
        transition: 0.8 all ease;
    } 
`

export const NavbarContainer = styled(MyContainer)`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    max-width:100vw;
    ${MyContainer}
`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size:1.5rem;
    align-items:center;
    display:flex;
    align-items:center;
    color:white;
`

export const NavBrand = styled.p`
    color:white;
    font-family: ${props => props.theme.firstFont};
`
export const MobileIcon = styled.div`  
    display : none;
    @media screen and (max-width:${props => props.theme.maxWidth}){
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.ul`
display : flex;
align-items:center;
list-style:none;
text-align:center;

    @media screen and (max-width:${props => props.theme.maxWidth}){
    display:flex;
    flex-direction:column;
    justify-content:space-around!important;
    width:100%;
    height:50vh;
    position:absolute;
    left:0;
    top: ${({click}) => (click ? "100%": "-100vh")};
    opacity : 1;
    transition: all 0.5s ease;
    background : ${props => props.theme.primary};
    }
`

export const NavItem = styled.li`
    height:80px;
    @media screen and (max-width:${props => props.theme.maxWidth})
    {
        width:100%
    }
`

export const NavLink = styled(Link)`
    color : #fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    font-family: ${props => props.theme.firstFont};
    &:hover{
        color:#efefef;
        transition :  0.3s All ease;
    }
    @media screen and (max-width:${props => props.theme.maxWidth}){
        text-align: center;
        padding : 2rem;
        width:100%;
        display: table;
        &:hover{
            color:#efefef;
            transition :  0.3s All ease;
        }
    }
`
