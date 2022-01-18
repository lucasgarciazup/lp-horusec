import React from "react"
import { Container, Image } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

const ProjectsWithTrustedCodes: React.FC = () => {
  const { t } = useTranslation()

  const { image } = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "pipeline" }) {
        name
        publicURL
      }
    }
  `)

  return (
    <Section dark>
      <Container>
        <TitleSection>{t("projects_with_trusted_codes_title")}</TitleSection>
        <SubTitleSection className="m-0">
          {t("projects_with_trusted_codes_subtitle")}
        </SubTitleSection>
        <Image className="mx-auto vstack" fluid src={image?.publicURL} />
      </Container>
    </Section>
  )
}

export default ProjectsWithTrustedCodes
