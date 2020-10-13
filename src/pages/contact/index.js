import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ContactForm from "../../components/Contact"

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <h1>Contact</h1>
    <ContactForm/>
  </Layout>
)

export default Contact
