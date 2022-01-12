import React, { useEffect } from 'react';
import { Hamburguer, Header, LangSelect, MenuLink, MenuList, MenuWrapper, Nav } from './styles';
import { Dropdown, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logos/app.png';

import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';


const Navbar: React.FC = () => {

  const { language, languages, changeLanguage } = useI18next();
  const { t } = useTranslation();

  const menus = [
    {
      title: t("navbar_about_us"),
      link: '/about',
    },
    {
      title: t("navbar_docs"),
      link: '/docs',
    },
    {
      title: t("navbar_community"),
      link: '/community',
    },
    {
      title: t("navbar_github"),
      link: 'https://github.com/ZupIT/horusec',
      target: '_blank'
    },
  ];

  return (
    <Header>
      <Nav>
        <div>
          <img src={logo} width="160px" height="auto" />
        </div>
        <Hamburguer>H</Hamburguer>
        <MenuWrapper>
          <MenuList>
            {menus.map(menu => (
              <MenuLink key={menu.link}>
                <Link to={menu.link} {...menu.target ? { target: '_blank' } : ''}>
                  {menu.title}
                </Link>
              </MenuLink>
            ))}
          </MenuList>
        </MenuWrapper>
        <LangSelect>
          <NavDropdown
            id="nav-dropdown-languages"
            title={language}
          >
            {languages.map(item => (
              <NavDropdown.Item key={item} onClick={() => changeLanguage(item)}>
                {item}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </LangSelect>
      </Nav>
    </Header>
  );
}

export default Navbar;