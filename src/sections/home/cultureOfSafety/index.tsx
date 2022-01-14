import React from "react"
import { Container, Image } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CultureOfSafety: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "culture_of_safety" }) {
        name
        publicURL
        childImageSharp {
          fixed {
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
        <Img
          fixed={image.childImageSharp.fixed}
          className="mx-auto d-block mb-5"
        />
        <TitleSection>{t("culture_of_safety_title")}</TitleSection>
        <SubTitleSection>{t("culture_of_safety_subtitle")}</SubTitleSection>
      </Container>
    </Section>
  )
}

export default CultureOfSafety
