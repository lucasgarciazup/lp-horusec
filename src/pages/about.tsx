import React from "react"
import { graphql } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import HowItWorks from "../sections/about/howItWorks"
import WhatIsIt from "../sections/about/whatIsIt"
import WhereToUse from "../sections/about/whereToUse"
import WhyUse from "../sections/about/whyUse"
import { TitlePage } from "../styles/layouts"
import { Template } from "../templates/default"
import Info from "../sections/about/info"
import { useTranslation } from "gatsby-plugin-react-i18next"
import TypesOfAnalysis from "../sections/about/typesOfAnalysis"

const pages: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Template>
      <TitlePage>
        <Container>
          <h1>{t("about_title")}</h1>
        </Container>
      </TitlePage>
      <WhatIsIt />
      <HowItWorks />
      <TypesOfAnalysis />
      <WhereToUse />
      <WhyUse />
      <Info />
    </Template>
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
