import React from "react"
import { Container } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, SubTitleSection, TitleSection } from "../../../styles/layouts"

const WhoUse: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Section>
      <Container>
        <TitleSection>{t("who_use_title")}</TitleSection>
      </Container>
    </Section>
  )
}

export default WhoUse
