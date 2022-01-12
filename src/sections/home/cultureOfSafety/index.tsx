import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, SubTitleSection, TitleSection } from '../../../styles/layouts';

const CultureOfSafety: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <Container>
                <TitleSection>{t("culture_of_safety_title")}</TitleSection>
                <SubTitleSection>{t("culture_of_safety_subtitle")}</SubTitleSection>
            </Container>
        </Section>
    );
}

export default CultureOfSafety;