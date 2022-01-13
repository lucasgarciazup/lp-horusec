import React from "react"
import { graphql } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import HowItWorks from "../sections/about/howItWorks"
import WhatIsIt from "../sections/about/whatIsIt"
import WhereToUse from "../sections/about/whereToUse"
import WhyUse from "../sections/about/whyUse"
import { Section, TitlePage } from "../styles/layouts"

import Default from "../templates/default"
import Button from "../components/Button"
import { DocumentationButton, DownloadButton } from "../styles/buttons"
import Info from "../sections/about/info"

const pages: React.FC = () => {
  return (
    <Default>
      <TitlePage>
        <Container>
          <h1>Sobre o Horusec</h1>
        </Container>
      </TitlePage>
      <Container>
        <WhatIsIt />
        <HowItWorks />
        <WhereToUse />
        <WhyUse />
        <Info />
      </Container>
    </Default>
  )
}

export default pages

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
