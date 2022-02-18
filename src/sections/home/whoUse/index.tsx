import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, TitleSection } from "../../../styles/layouts"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const WhoUse: React.FC = () => {
  const { t } = useTranslation()

  const {
    images: { nodes: images },
  } = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { relativeDirectory: { eq: "images/whoUse" } }
        sort: { order: ASC, fields: name }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fixed {
              aspectRatio
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <Section className="mb-5">
      <Container>
        <TitleSection className="mb-5">{t("who_use_title")}</TitleSection>
        <Row className="row-cols-1 row-cols-md-3 row-cols-lg-4 gy-3 justify-content-center align-items-center">
          {images.map(image => (
            <Col key={image.id}>
              <Img
                loading="lazy"
                fixed={image.childImageSharp.fixed}
                alt={image.name}
                className="img-fluid mx-auto w-100"
                objectFit="contain"
                objectPosition="center"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  )
}

export default WhoUse
