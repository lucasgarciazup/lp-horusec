import React from "react"
import { Container } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"

const ProjectsWithTrustedCodes: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Section dark>
      <Container>
        <TitleSection>{t("projects_with_trusted_codes_title")}</TitleSection>
        <SubTitleSection>
          {t("projects_with_trusted_codes_subtitle")}
        </SubTitleSection>
      </Container>
    </Section>
  )
}

export default ProjectsWithTrustedCodes
