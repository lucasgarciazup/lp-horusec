import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, CaptionSection, TitleSection } from '../../../styles/layouts';

const WhatIsIt: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <Container>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <TitleSection className='text-start'>{t("what_is_it_title")}</TitleSection>
                        <CaptionSection className='text-start'>{t("what_is_it_subtitle")}</CaptionSection>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default WhatIsIt;