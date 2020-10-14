import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroInfoSection from "../components/HeroInfoSection"
import {firstCTA} from "../DATA/HomePage"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroInfoSection {...firstCTA}/>
  </Layout>
)

export default IndexPage
