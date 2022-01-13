import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, CaptionSection, TitleSection } from "../../../styles/layouts"

const HowItWorks: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <TitleSection className="text-start">
              {t("how_it_works_title")}
            </TitleSection>
            <CaptionSection className="text-start">
              {t("how_it_works_subtitle")}
            </CaptionSection>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Section>
  )
}

export default HowItWorks
