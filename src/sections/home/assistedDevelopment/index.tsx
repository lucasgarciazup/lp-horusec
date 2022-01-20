import React from "react"
import { Container } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AssistedDevelopment: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "assisted_development" }) {
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
          className="mx-auto d-block mb-5 img-fluid"
        />
        <TitleSection>{t("assisted_development_title")}</TitleSection>
        <SubTitleSection>{t("assisted_development_subtitle")}</SubTitleSection>
      </Container>
    </Section>
  )
}

export default AssistedDevelopment
