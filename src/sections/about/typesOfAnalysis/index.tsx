import React from "react"
import { Container } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { CaptionSection, Section, TitleSection } from "../../../styles/layouts"
import CardsTypeOfAnalysis from "../../../components/CardsTypeOfAnalysis"

const TypesOfAnalysis: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <Container>
        <TitleSection>{t("type_of_analysis_about_title")}</TitleSection>
        <CaptionSection className="text-center">
          {t("type_of_analysis_subtitle")}
        </CaptionSection>

        <CardsTypeOfAnalysis />
      </Container>
    </Section>
  )
}

export default TypesOfAnalysis
