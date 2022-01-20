import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, CaptionSection, TitleSection } from "../../../styles/layouts"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HowItWorks: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "how_it_works" }) {
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
    <Section dark>
      <Container>
        <Row>
          <Col>
            <TitleSection className="text-start">
              {t("how_it_works_title")}
            </TitleSection>
            <CaptionSection className="text-start">
              {t("how_it_works_subtitle")}
            </CaptionSection>
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

export default HowItWorks
