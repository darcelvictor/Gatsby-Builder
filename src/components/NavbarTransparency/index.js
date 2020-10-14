import React, { useState, useEffect }from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import NavIcon from '../../images/svg/logoDP.inline.svg'
import {Nav, NavbarContainer, NavLogo, NavBrand, MobileIcon, NavMenu, NavItem, NavLink,NavCTA} from './NavbarsElements'


const Navbar = () => {
    const [click,setClick]=useState(false)
    const [scrool,setScroll]= useState(false)


    const changeNav = () => {
        if (window.scrollY >=80) 
        {
            setScroll(true)
        }
        else
        {
            setScroll(false)
        }
    }

    const handleClick = () => setClick(!click)

    useEffect(()=>{
        changeNav()
        window.addEventListener("scroll",changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value = {{color:"white"}}>
                <Nav active={scrool} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon style={{margin: "0 1.5rem 0 0", alignSelf:"center"}}/>
                            <NavBrand>Digital<br/>Project</NavBrand>
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            {/* <NavItem >
                                <NavLink to="/">Expertises</NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavCTA to="/contact">Contact</NavCTA>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

