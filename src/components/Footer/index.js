import React from 'react'
import {Footer, LinkFooter, AFooter} from './FooterElements'


const FooterSection = () => {
    return (
        <Footer>
           © {new Date().getFullYear()}, Built by
           {` `}
           <LinkFooter to="/">Digital Project</LinkFooter>
           {` `}
           With
           {` `}
           <AFooter href="https://www.gatsbyjs.com/">Gatsby</AFooter>
        </Footer>
    )
}


export default FooterSection
