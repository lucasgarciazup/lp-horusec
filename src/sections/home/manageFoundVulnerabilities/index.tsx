import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, SubTitleSection, TitleSection } from '../../../styles/layouts';
import { Link } from 'gatsby';

const ManageFoundVulnerabilities: React.FC = () => {
    const { t } = useTranslation();
  return (
    <Section>
        <Container>
            <Row>
                <Col className='col-4'>
                </Col>
                <Col className='col-6'>
                    <TitleSection className='text-start'>{t("manage_found_vulnerabilities_title")}</TitleSection>
                    <SubTitleSection className='text-start'>{t("manage_found_vulnerabilities_subtitle")}</SubTitleSection>
                    <Link className='text-decoration-none' to="https://docs.horusec.io/docs/pt-br/overview/">Ver documentação</Link>
                </Col>
            </Row>
        </Container>
    </Section>
  );
}

export default ManageFoundVulnerabilities;