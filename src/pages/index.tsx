import React from "react"
import { Helmet, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import { Template } from "../templates/default"
import Welcome from "../sections/home/welcome"
import TypesOfAnalysis from "../sections/home/typesOfAnalysis"
import Languages from "../sections/home/languages"
import ProjectsWithTrustedCodes from "../sections/home/projectsWithTrustedCodes"
import CultureOfSafety from "../sections/home/cultureOfSafety"
import { Col, Container, Row } from "react-bootstrap"
import AssistedDevelopment from "../sections/home/assistedDevelopment"
import ManageFoundVulnerabilities from "../sections/home/manageFoundVulnerabilities"
import WhoUse from "../sections/home/whoUse"

export default function Home() {
  const { t } = useTranslation()

  return (
    <Template>
      <Welcome />
      <TypesOfAnalysis />
      <Languages />
      <ProjectsWithTrustedCodes />
      <Container>
        <Row>
          <Col>
            <CultureOfSafety />
          </Col>
          <Col>
            <AssistedDevelopment />
          </Col>
        </Row>
      </Container>
      <ManageFoundVulnerabilities />
      <WhoUse />
    </Template>
  )
}

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
