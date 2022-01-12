import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Section, SubTitleSection, TitleSection } from '../../../styles/layouts';

const AssistedDevelopment: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Section>
            <Container>
                <TitleSection>{t("assisted_development_title")}</TitleSection>
                <SubTitleSection>{t("assisted_development_subtitle")}</SubTitleSection>
            </Container>
        </Section>
    );
}

export default AssistedDevelopment;