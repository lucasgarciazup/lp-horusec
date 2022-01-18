import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Col, Container, Row } from "react-bootstrap"
import { FooterContainer, Copyright, List, Topic } from "./styles"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { useStaticQuery, graphql, withPrefix } from 'gatsby'

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const { opensource, zup } = useStaticQuery(graphql`
    query {
      opensource: file(name: { eq: "opensource" }) {
        name
        publicURL
      },
      zup: file(name: { eq: "zup" }) {
        name
        publicURL
      }
    }
  `)

  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col>
            <List>
              <li>
                <a href="https://opensource.zup.com.br/" target="_blank">
                  <img src={withPrefix(opensource?.publicURL)} alt="Opensource logo" />
                </a>
              </li>
              <li>
                <a href="https://zup.com.br/" target="_blank">
                  <img src={withPrefix(zup?.publicURL)} alt="Zup logo" />
                </a>
              </li>
            </List>
          </Col>
          <Col>
            <Topic>Horusec</Topic>
            <List>
              <li>{t("footer_technologies")}</li>
            </List>
          </Col>
          <Col>
            <Topic>{t("footer_community")}</Topic>
            <List>
              <li>{t("footer_technologies")}</li>
              <li>Blog</li>
              <li>
                <a href="https://opensource.zup.com.br/radar" target="_blank">
                  Tech Radar
                </a>
              </li>
              <li>{t("footer_events")}</li>
              <li>{t("footer_privacy_policy")}</li>
            </List>
          </Col>
          <Col>
            <Topic>{t("footer_social_networks")}</Topic>
            <List>
              <li>
                <a>
                  <FaGithub /> Twitter
                </a>
              </li>
              <li>
                <a>
                  <FaTwitter /> Youtube
                </a>
              </li>
              <li>
                <a>
                  <FaLinkedin /> Github
                </a>
              </li>
              <li>
                <a>
                  <FaYoutube /> Linkedin
                </a>
              </li>
            </List>
          </Col>
          <Col>
            <Topic>{t("footer_who_we_are")}</Topic>
            <List>
              <li>{t("footer_about_us")}</li>
              <li>{t("footer_contact")}</li>
            </List>
          </Col>
        </Row>
      </Container>
      <Copyright>
        ©Copyright {new Date().getFullYear()} Zup. {t("footer_copyright")}
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
