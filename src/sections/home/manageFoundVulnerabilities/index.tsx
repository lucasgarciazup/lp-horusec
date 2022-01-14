import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
        <Row>
          <Col className="col-5">
            <Img
              fluid={image?.childImageSharp?.fluid}
              className="mx-auto d-block mb-5"
            />
          </Col>
          <Col className="col-6">
            <TitleSection className="text-start">
              {t("manage_found_vulnerabilities_title")}
            </TitleSection>
            <SubTitleSection className="text-start">
              {t("manage_found_vulnerabilities_subtitle")}
            </SubTitleSection>
            <a
              className="text-decoration-none"
              href="https://docs.horusec.io/docs/pt-br/overview/"
            >
              {t("button_documentation")}
            </a>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default ManageFoundVulnerabilities
