import React from "react"
import {
  Navbar as NavbarBS,
  Container,
  NavDropdown,
  Nav,
} from "react-bootstrap"

import logo from "../../assets/logos/app.png"

import { LangSelect, MenuLink } from "./styles"

import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"

const Navbar: React.FC = () => {
  const { language, languages, changeLanguage } = useI18next()
  const { t } = useTranslation()

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
      link: "https://github.com/ZupIT/horusec",
      target: "_blank",
    },
  ]

  return (
    <NavbarBS className="shadow-sm bg-white p-0" expand="lg" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} width="160px" height="auto" />
        </Link>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-around">
            {menus.map((menu, index) => (
              <MenuLink
                key={index.toString()}
                className="nav-link"
                to={menu.link}
                {...(menu.target ? { target: "_blank" } : "")}
                activeClassName="active"
                partiallyActive
              >
                {menu.title}
              </MenuLink>
            ))}
          </Nav>
          <Nav>
            <LangSelect>
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
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  )
}

export default Navbar
