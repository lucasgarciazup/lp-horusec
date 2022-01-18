import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Section, SubTitleSection } from "../../../styles/layouts"
import { Container, Row, Col } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import { ContributeButton } from "../../../styles/buttons"
import Img from "gatsby-image"

const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  color: #113b65;
`

const SectionStyled = styled(Section)<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-position: center;
  background-size: contain;
`

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
        <Row>
          <Col>
            <Title>{t("community_title")}</Title>
            <SubTitleSection>{t("community_subtitle")}</SubTitleSection>
            <ContributeButton highlight width="30%" />
          </Col>
          <Col>
            <Img fixed={image?.childImageSharp?.fixed} alt={image?.name} />
          </Col>
        </Row>
      </Container>
    </SectionStyled>
  )
}
