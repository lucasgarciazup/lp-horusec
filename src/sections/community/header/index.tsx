import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SubTitleSection } from "../../../styles/layouts"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { ContributeButton } from "../../../styles/buttons"
import Img from "gatsby-image"
import { SectionStyled, Title } from "./styles"

export default function HeaderCommunity() {
  const { t } = useTranslation()
  const { image, background } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "community_header" }) {
        name
        publicURL
        childImageSharp {
          fixed {
            aspectRatio
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      background: file(name: { eq: "community_header_bg" }) {
        name
        publicURL
      }
    }
  `)

  return (
    <SectionStyled dark backgroundImage={background?.publicURL}>
      <Container>
        <Row className="gy-5">
          <Col>
            <Title className="text-center text-lg-start">
              {t("community_title")}
            </Title>
            <SubTitleSection className="text-lg-start">
              {t("community_subtitle")}
            </SubTitleSection>
            <Row>
              <Col className="col-12 col-md-8 col-lg-5 mx-auto mx-lg-0">
                <ContributeButton highlight />
              </Col>
            </Row>
          </Col>
          <Col>
            <Img
              fixed={image?.childImageSharp?.fixed}
              alt={image?.name}
              className="d-flex mx-auto"
            />
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  )
}
