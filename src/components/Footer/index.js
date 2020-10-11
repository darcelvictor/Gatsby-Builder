import React from 'react'
import {Footer, LinkFooter} from './FooterElements'


const FooterSection = () => {
    return (
        <Footer>
           © {new Date().getFullYear()}, Built by
           {` `}
           <LinkFooter to="/">Digital Project</LinkFooter>
        </Footer>
    )
}


export default FooterSection
