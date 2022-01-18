import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { DocumentationButton } from '../../../styles/buttons'
import styled from 'styled-components'

const StyledDocumentationButton = styled(DocumentationButton).attrs({
  className: "mx-auto mx-lg-0"
})``;

const ManageFoundVulnerabilities: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "manage_found_vulnerabilities" }) {
        name
        publicURL
        childImageSharp {
          fluid {
            aspectRatio
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Container>
        <Row className='gy-5 justify-content-center align-items-center'>
          <Col className="col-10 col-lg-5">
            <Img
              fluid={image?.childImageSharp?.fluid}
              loading="lazy"
              alt={image.name}
              className="d-flex mx-auto w-100 h-100"
              objectFit="contain"
            />
          </Col>
          <Col className="col-12 col-lg-7">
            <TitleSection className="text-center text-lg-start">
              {t("manage_found_vulnerabilities_title")}
            </TitleSection>
            <SubTitleSection className="text-center text-lg-start">
              {t("manage_found_vulnerabilities_subtitle")}
            </SubTitleSection>
            <StyledDocumentationButton highlight width='50%' />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default ManageFoundVulnerabilities
