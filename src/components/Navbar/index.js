import React, { useState }from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import NavIcon from '../../images/svg/logoDP.inline.svg'
import {Nav, NavbarContainer, NavLogo, NavBrand, MobileIcon, NavMenu, NavItem, NavLink} from './NavbarsElements'


const Navbar = () => {
    const [click,setClick]=useState(false)
   
    const handleClick = () => setClick(!click)

    return (
        <>
            <IconContext.Provider value = {{color:"white"}}>
                <Nav click={click}>
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
                            <NavItem >
                                <NavLink to="/">Expertises</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/">Contact</NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

