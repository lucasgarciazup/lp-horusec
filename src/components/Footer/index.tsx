import React from 'react';
import { Copyright, List, Wrapper } from './styles';

// import { Container } from './styles';
import opensource from '../../assets/logos/opensource.png';
import zup from '../../assets/logos/zup.png';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <List>
                <ul>
                    <li>
                        <img src={opensource} alt="Opensource logo" />
                        <img src={zup} alt='Zup logo' />
                    </li>
                    <li>
                        <h4>Horusec</h4>
                        <ul>
                            <li>{t("footer_technologies")}</li>
                        </ul>
                    </li>
                    <li>
                        <h4>{t("footer_community")}</h4>
                        <ul>
                            <li>{t("footer_technologies")}</li>
                            <li>Blog</li>
                            <li>Tech Radar</li>
                            <li>{t("footer_events")}</li>
                            <li>{t("footer_privacy_policy")}</li>
                        </ul>
                    </li>
                    <li>
                        <h4>{t("footer_social_networks")}</h4>
                        <ul>
                            <li>Twitter</li>
                            <li>Youtube</li>
                            <li>Github</li>
                            <li>Linkedin</li>
                        </ul>
                    </li>
                    <li>
                        <h4>{t("footer_who_we_are")}</h4>
                        <ul>
                            <li>{t("footer_about_us")}</li>
                            <li>{t("footer_contact")}</li>
                        </ul>
                    </li>
                </ul>
            </List>
            <Copyright>©Copyright 2021 Zup. {t("footer_copyright")}</Copyright>
        </Wrapper>
    );
}

export default Footer;