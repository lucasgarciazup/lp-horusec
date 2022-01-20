import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, BodySection, TitleSection } from "../../../styles/layouts"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WhyUse: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "why_use" }) {
        name
        publicURL
        childImageSharp {
          fixed(height: 400) {
            aspectRatio
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center">
            <TitleSection>{t("why_use_title")}</TitleSection>
            <BodySection
              className="text-start"
              dangerouslySetInnerHTML={{ __html: t("why_use_subtitle") }}
            />
          </Col>
          <Col>
            <Img
              fixed={image?.childImageSharp?.fixed}
              className="mx-auto d-block img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default WhyUse
