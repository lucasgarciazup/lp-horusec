import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Section, BodySection, TitleSection } from "../../../styles/layouts"

const WhereToUse: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Section>
      <Container>
        <TitleSection>{t("where_to_use_title")}</TitleSection>
        <Row>
          <Col>
            <BodySection
              className="text-start"
              dangerouslySetInnerHTML={{ __html: t("where_to_use_subtitle") }}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Section>
  )
}

export default WhereToUse
