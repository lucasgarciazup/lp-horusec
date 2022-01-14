import React from "react"
import {
  Navbar as NavbarBS,
  Container,
  NavDropdown,
  Nav,
} from "react-bootstrap"

import { LangSelect, MenuLink, MenuLinkExternal } from "./styles"

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
console.log(window.location.pathname);
  return (
    <NavbarBS className="shadow-sm bg-white p-0" expand="lg" sticky="top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src="/app.png" width="160px" height="auto" />
        </Link>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-around">
            {menus.map((menu, index) => (
              menu.link.includes("http") ? (
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
                  {...{ className: window.location.pathname.includes(menu.link) ? "nav-link active" : "nav-link" }}
                  {...(menu.target ? { target: "_blank" } : "")}
                  partiallyActive
                >
                  {menu.title}
                </MenuLink>
              )
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
