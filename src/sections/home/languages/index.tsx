import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const ImageBox = styled.div`
  width: 85px;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6f7;
  border-radius: 5px;
`

export default function Languages() {
  const {
    images: { nodes: images },
  } = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { relativeDirectory: { eq: "images/languages" } }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fixed(fit: CONTAIN) {
              aspectRatio
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  `)

  const { t } = useTranslation()
  return (
    <Section>
      <Container>
        <TitleSection>{t("languages_title")}</TitleSection>
        <SubTitleSection>{t("languages_subtitle")}</SubTitleSection>
        <Row className="row-cols-auto justify-content-center align-items-center gap-3">
          {images.map(image => (
            <Col key={image.id}>
              <ImageBox>
                <Img
                  loading="lazy"
                  fixed={image.childImageSharp.fixed}
                  alt={image.name}
                />
              </ImageBox>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  )
}
