import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, BodySection, TitleSection } from "../../../styles/layouts"

const WhyUse: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Section>
      <Container>
        <Row>
          <Col>
            <TitleSection>{t("why_use_title")}</TitleSection>
            <BodySection
              className="text-start"
              dangerouslySetInnerHTML={{ __html: t("why_use_subtitle") }}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Section>
  )
}

export default WhyUse
