import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Col, Container, Row } from "react-bootstrap"
import { FooterContainer, Copyright, List, Topic } from "./styles"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { useStaticQuery, graphql, withPrefix, Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/useSiteMetada"

const Footer: React.FC = () => {
  const { t } = useTranslation()

  const { social } = useSiteMetadata()

  const { opensource, zup } = useStaticQuery(graphql`
    query {
      opensource: file(name: { eq: "opensource" }) {
        name
        publicURL
      }
      zup: file(name: { eq: "zup" }) {
        name
        publicURL
      }
    }
  `)

  return (
    <FooterContainer>
      <Container>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-lg-5">
          <Col>
            <List>
              <li>
                <img
                  className="img-fluid"
                  src={withPrefix("app.png")}
                  alt="Horusec logo"
                  style={{ maxWidth: "150px" }}
                />
              </li>
              <li>
                <a href="https://opensource.zup.com.br/" target="_blank">
                  <img src={opensource?.publicURL} alt="Opensource logo" />
                </a>
              </li>
              <li>
                <a href="https://zup.com.br/" target="_blank">
                  <img src={zup?.publicURL} alt="Zup logo" />
                </a>
              </li>
            </List>
          </Col>
          <Col>
            <Topic>{t("footer_other_products")}</Topic>
            <List>
              <li>
                <a href="https://charlescd.io/">Charles</a>
              </li>
              <li>
                <a href="https://usebeagle.io/">Beagle</a>
              </li>
              <li>
                <a href="https://ritchiecli.io/">Ritchie</a>
              </li>
            </List>
          </Col>
          <Col>
            <Topic>{t("footer_community")}</Topic>
            <List>
              <li>
                <a href="https://medium.com/zup-it" target="_blank">
                  {t("footer_blog")}
                </a>
              </li>
              <li>
                <a href="https://forum.zup.com.br/" target="_blank">
                  {t("footer_forum")}
                </a>
              </li>
              <li>
                <a
                  href="https://insights.zup.com.br/politica-privacidade"
                  target="_blank"
                >
                  {t("footer_privacy_policy")}
                </a>
              </li>
            </List>
          </Col>
          <Col>
            <Topic>{t("footer_social_networks")}</Topic>
            <List>
              <li>
                <a href={social.twitter} target="_blank">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href={social.youtube} target="_blank">
                  <FaYoutube /> Youtube
                </a>
              </li>
              <li>
                <a href={social.github} target="_blank">
                  <FaGithub /> Github
                </a>
              </li>
              <li>
                <a href={social.linkedin} target="_blank">
                  <FaLinkedin /> Linkedin
                </a>
              </li>
            </List>
          </Col>
          <Col>
            <Topic>{t("footer_who_we_are")}</Topic>
            <List>
              <li>
                <Link to="/about">{t("footer_about_us")}</Link>
              </li>
              <li>
                <a href="https://opensource.zup.com.br/contact" target="_blank">
                  {t("footer_contact")}
                </a>
              </li>
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
