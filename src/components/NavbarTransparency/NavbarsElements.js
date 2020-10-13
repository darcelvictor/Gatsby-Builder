import styled from "styled-components"
import { Link } from "gatsby"
import {MyContainer} from "../ParentsComponents"

export const Nav = styled.nav`
    background:  ${({active}) => active ? "#101522": "transparency"};
    height: 80px;
    display: flex;
    position:sticky;
    font-size:1rem;
    justify-content: center;
    align-items:center;
    top:0;
    z-index:999;
    transition: 0.8 all ease;
    @media screen and (max-width: ${props => props.theme.maxWidth})
    {
        background: ${({click}) => click ? "#101522": "#101522"};
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
    color: #555;
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
    display: ${({click}) => (click ? "flex": "none")};
    flex-direction:column;
    justify-content:space-around!important;
    width:100%;
    height:50vh;
    position:absolute;
    right:${({click}) => (click ? "0%": "-100vw")};
    top:80px;
    opacity : 1;
    transition: all 0.5s ease;
    background : #101522;
    }
`

export const NavItem = styled.li`
    height:80px;
    display:flex;
    align-items:center;
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

export const NavCTA = styled(Link)`
    color : #fff;
    display:flex;
    align-items:center;
    align-self:center;
    background-color : ${props => props.theme.quaternary};
    text-decoration:none;
    padding: 10px 20px;
    border : 2px solid ${props => props.theme.quaternary};
    height: 30px;
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
        padding : 2rem;
        width: 80%;
        display: table;
        &:hover{
            color:#efefef;
            transition :  0.3s All ease;
        }
    }
`
