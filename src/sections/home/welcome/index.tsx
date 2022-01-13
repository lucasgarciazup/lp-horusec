import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Title, SubTitle, Download, Contribute, Section, Banner } from './styles';

import { useTranslation } from 'gatsby-plugin-react-i18next';
import banner from '../../../assets/animations/horus-animation.gif';
import { ContributeButton, DownloadButton } from '../../../styles/buttons';

const Welcome: React.FC = () => {

    const { t } = useTranslation();
    
  return (
      <Section id="welcome">
      <Container className='py-5'>
        <Row>
            <Col>
                <Title>{t("welcome_title")}</Title>
                <SubTitle>{t("welcome_subtitle")}</SubTitle>
                <Row>
                  <Col className='col-4'>
                    <DownloadButton highlight/>
                  </Col>
                  <Col className='col-4'>
                    <ContributeButton />
                  </Col>
                </Row>
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