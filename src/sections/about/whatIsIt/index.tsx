import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, CaptionSection, TitleSection } from "../../../styles/layouts"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WhatIsIt: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "what_is_it" }) {
        name
        publicURL
        childImageSharp {
          fixed(height: 600) {
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
          <Col>
            <Img
              fixed={image.childImageSharp.fixed}
              className="mx-auto d-block img-fluid"
            />
          </Col>
          <Col>
            <TitleSection className="text-start">
              {t("what_is_it_title")}
            </TitleSection>
            <CaptionSection className="text-start">
              {t("what_is_it_subtitle")}
            </CaptionSection>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default WhatIsIt
