import React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'

import Default from '../templates/default'
import { graphql } from 'gatsby';
import Welcome from '../sections/home/welcome';
import TypesOfAnalysis from '../sections/home/typesOfAnalysis';
import Languages from '../sections/home/languages';
import ProjectsWithTrustedCodes from '../sections/home/projectsWithTrustedCodes';
import CultureOfSafety from '../sections/home/cultureOfSafety';
import { Col, Container, Row } from 'react-bootstrap';
import AssistedDevelopment from '../sections/home/assistedDevelopment';
import ManageFoundVulnerabilities from '../sections/home/manageFoundVulnerabilities';
import WhoUse from '../sections/home/whoUse';

export default function Home({ data }) {
  const { t } = useTranslation();
  return (
    <Default>
      <Welcome />
      <TypesOfAnalysis />
      <Languages />
      <ProjectsWithTrustedCodes />
      <Container>
        <Row>
          <Col><CultureOfSafety /></Col>
          <Col><AssistedDevelopment /></Col>
        </Row>
      </Container>
      <ManageFoundVulnerabilities />
      <WhoUse />
    </Default>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;