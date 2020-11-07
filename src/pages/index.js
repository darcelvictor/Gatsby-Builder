import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroInfoSection from "../components/HeroInfoSection"
import PresentationSection from "../components/PresentationSection"
import {firstCTA} from "../DATA/HomePage"
import Expertises from "../components/Expertises"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroInfoSection {...firstCTA}/>
    <PresentationSection/>
    <Expertises/>
  </Layout>
)

export default IndexPage
