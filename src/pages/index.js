import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroInfoSection from "../components/HeroInfoSection"
import {firstCTA} from "./DATA/HomePage"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroInfoSection {...firstCTA}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, height:`200vh` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
