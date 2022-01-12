import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Title, SubTitle, Download, Contribute, Section, Banner } from './styles';

import { useTranslation } from 'gatsby-plugin-react-i18next';
import banner from '../../../assets/animations/horus-animation.gif';

const Welcome: React.FC = () => {

    const { t } = useTranslation();
    
  return (
      <Section id="welcome">
      <Container className='py-5'>
        <Row>
            <Col>
                <Title>{t("welcome_title")}</Title>
                <SubTitle>{t("welcome_subtitle")}</SubTitle>
                <div className='d-flex gap-3'>
                  <Download href='https://docs.horusec.io/docs/pt-br/cli/installation/' target="_blank">
                    {t("welcome_download")}
                  </Download>
                  <Contribute href="https://github.com/ZupIT/horusec" target="_blank">
                    {t("welcome_contribute")}
                  </Contribute>
                </div>
            </Col>

            <Col className='d-flex justify-content-end'>
              <Banner src={banner} />
            </Col>
        </Row>
      </Container>
      </Section>
  );
}

export default Welcome;