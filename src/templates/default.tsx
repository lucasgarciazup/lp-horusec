import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { GlobalStyle } from "../styles/global"

import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { TemplateInterface } from "../interfaces/template.interface"
export const Template: React.FC<TemplateInterface> = ({
  title = "",
  children,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  const titlePage = [siteMetadata.title]
  if (title) titlePage.unshift(title)

  return (
    <main className="mt-5">
      <Helmet title={titlePage.join(" | ")} defaultTitle={siteMetadata.title} />
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`
