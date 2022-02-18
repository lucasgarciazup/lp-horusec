import React from "react"
import {
  Navbar as NavbarBS,
  Container,
  NavDropdown,
  Nav,
  Stack,
  Row,
  Col,
} from "react-bootstrap"
import { withPrefix } from "gatsby"
import { LangSelect, MenuLink, MenuLinkExternal } from "./styles"

import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { globalHistory } from "@reach/router"
import { useSiteMetadata } from "../../hooks/useSiteMetada"

import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

const Navbar: React.FC = () => {
  const { language, languages, changeLanguage } = useI18next()
  const { t } = useTranslation()
  const { location } = globalHistory
  const { social } = useSiteMetadata()
  delete social["blog"]

  const menus = [
    {
      title: t("navbar_about_us"),
      link: "/about",
    },
    {
      title: t("navbar_docs"),
      link:
        language === "en"
          ? "https://docs.horusec.io/docs/overview/"
          : "https://docs.horusec.io/docs/pt-br/overview/",
      target: "_blank",
    },
    {
      title: t("navbar_community"),
      link: "/community",
    },
    {
      title: t("navbar_github"),
      link: social.github,
      target: "_blank",
    },
  ]

  const icons = {
    github: <FaGithub size={24} color="#404659" />,
    youtube: <FaYoutube size={24} color="#404659" />,
    twitter: <FaTwitter size={24} color="#404659" />,
    linkedin: <FaLinkedin size={24} color="#404659" />,
  }

  return (
    <NavbarBS className="shadow-sm bg-white p-0" expand="lg" fixed="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={withPrefix("app.png")} width="160px" height="auto" />
        </Link>

        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />

        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-around">
            {menus.map((menu, index) =>
              menu.link?.includes("http") ? (
                <MenuLinkExternal
                  key={index.toString()}
                  href={menu.link}
                  className="nav-link"
                  {...(menu.target ? { target: "_blank" } : "")}
                >
                  {menu.title}
                </MenuLinkExternal>
              ) : (
                <MenuLink
                  key={index.toString()}
                  to={menu.link}
                  className={`nav-link ${withPrefix(menu.link)} ${
                    location?.pathname.includes(menu.link) ? "active" : ""
                  }`}
                  activeClassName="active"
                  {...(menu.target ? { target: "_blank" } : "")}
                >
                  {menu.title}
                </MenuLink>
              )
            )}
          </Nav>

          <LangSelect className="d-none d-lg-block">
            <NavDropdown id="nav-dropdown-languages" title={t(language)}>
              {languages
                .filter(lang => lang !== language)
                .map(item => (
                  <NavDropdown.Item
                    key={item}
                    onClick={() => changeLanguage(item)}
                  >
                    {t(item)}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </LangSelect>

          <div className="d-flex d-lg-none w-100">
            <LangSelect>
              <NavDropdown
                id="nav-dropdown-languages-mobile"
                style={{ border: "none" }}
                title={t(language)}
              >
                {languages
                  .filter(lang => lang !== language)
                  .map(item => (
                    <NavDropdown.Item
                      key={item}
                      onClick={() => changeLanguage(item)}
                    >
                      {t(item)}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </LangSelect>
            <Stack className="gap-3 flex-row w-75 align-items-center justify-content-center">
              {Object.entries(social)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([key, value]) => (
                  <a key={key} href={value} title={key} target="_blank">
                    {icons[key]}
                  </a>
                ))}
            </Stack>
          </div>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  )
}

export default Navbar
