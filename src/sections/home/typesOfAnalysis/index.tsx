import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Card, CardCaption, CardIcon, CardTitle } from './styles';
import { Section, TitleSection } from '../../../styles/layouts';

const TypesOfAnalysis: React.FC = () => {
  const { t } = useTranslation();

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
    <Section dark>
      <Container>
        <TitleSection>{t("type_of_analysis_title")}</TitleSection>
        <Row className="mt-5 justify-content-center">
          {cards.map(item => (
            <Col>
              <Card>
                <CardIcon />
                <CardTitle>{item.title}</CardTitle>
                <CardCaption>{item.caption}</CardCaption>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  )
}

export default TypesOfAnalysis;