import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Button from '../components/Button';

// import { Container } from './styles';

interface ButtonInterface {
    highlight?: boolean
}

export const DownloadButton: React.FC<ButtonInterface> = ({ highlight }) => {
    const { t } = useTranslation();
    return (
        <Button highlight={highlight} href="https://docs.horusec.io/docs/cli/installation/" target="_blank">
            {t("button_download")}
        </Button>
    );
}

export const ContributeButton: React.FC<ButtonInterface> = ({ highlight }) => {
    const { t } = useTranslation();
    return (
        <Button highlight={highlight} href="https://github.com/ZupIT/horusec-platform" target="_blank">
                {t("button_contribute")}
        </Button>
    );
}

export const DocumentationButton: React.FC<ButtonInterface> = ({ highlight }) => {
    const { t } = useTranslation();
    return (
        <Button highlight={highlight} href="https://docs.horusec.io/docs/overview/" target="_blank">
            {t("button_documentation")}
        </Button>
    );
}