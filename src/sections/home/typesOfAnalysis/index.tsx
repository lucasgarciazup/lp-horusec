import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, TitleSection } from "../../../styles/layouts"
import CardsTypeOfAnalysis from "../../../components/CardsTypeOfAnalysis"

const TypesOfAnalysis: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Section dark>
      <Container>
        <TitleSection>{t("type_of_analysis_title")}</TitleSection>
        <CardsTypeOfAnalysis />
      </Container>
    </Section>
  )
}

export default TypesOfAnalysis
