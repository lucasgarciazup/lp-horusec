import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, BodySection, TitleSection } from "../../../styles/layouts"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WhereToUse: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "where_to_use" }) {
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
        <TitleSection>{t("where_to_use_title")}</TitleSection>
        <Row>
          <Col>
            <BodySection
              className="text-start"
              dangerouslySetInnerHTML={{ __html: t("where_to_use_subtitle") }}
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

export default WhereToUse
