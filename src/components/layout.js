/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import GlobalStyle from "./globalStyle"

import Navbar from "./NavbarTransparency"
import FooterSection from "./Footer"




const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <GlobalStyle/>
        <main>{children}</main>
      <FooterSection/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
