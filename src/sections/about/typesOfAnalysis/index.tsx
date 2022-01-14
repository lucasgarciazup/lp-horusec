import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"

import { Card, CardCaption, CardIcon, CardTitle } from "./styles"
import { CaptionSection, Section, TitleSection } from "../../../styles/layouts"

const TypesOfAnalysis: React.FC = () => {
  const { t } = useTranslation()

  const cards = [
    {
      icon: t("type_of_analysis_card_1_icon"),
      title: t("type_of_analysis_card_1_title"),
      caption: t("type_of_analysis_card_1_caption"),
    },
    {
      icon: t("type_of_analysis_card_2_icon"),
      title: t("type_of_analysis_card_2_title"),
      caption: t("type_of_analysis_card_2_caption"),
    },
    {
      icon: t("type_of_analysis_card_3_icon"),
      title: t("type_of_analysis_card_3_title"),
      caption: t("type_of_analysis_card_3_caption"),
    },
  ]

  return (
    <Section>
      <Container>
        <TitleSection>{t("type_of_analysis_about_title")}</TitleSection>
        <CaptionSection className="text-center">
          {t("type_of_analysis_subtitle")}
        </CaptionSection>
        <Row className="mt-5 justify-content-center">
          {cards.map(item => (
            <Col key={item.title} className="text-center">
              <img src={item.icon} height={70} width="auto" className="mb-3" />
              <h2 className="mx-auto mb-3">{item.title}</h2>
              <p>{item.caption}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  )
}

export default TypesOfAnalysis
