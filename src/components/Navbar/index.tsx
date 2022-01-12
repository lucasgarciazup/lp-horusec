import React from 'react';
import { Hamburguer, Header, LangSelect, MenuLink, MenuList, MenuWrapper, Nav } from './styles';
import { Dropdown, NavDropdown } from 'react-bootstrap';

import logo from '../../assets/logos/app.png';
const Navbar: React.FC = () => {

  const menus = [
    {
      title: 'Sobre o Horusec',
      link: '/about',
    },
    {
      title: 'Documentação',
      link: '/docs',
    },
    {
      title: 'Comunidade',
      link: '/community',
    },
    {
      title: 'Github',
      link: 'https://github.com/ZupIT/horusec',
      target: '_blank'
    },
  ];

  const languages = [
    {
      text: "Portugues",
      value: "pt-BR",
    },
    {
      text: "English",
      value: 'en-US'
    }
  ]

  const currentLang = languages[0];

  const handleSelect = value => {
    console.log(value);
  }

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
              <MenuLink key={menu.title}>
                <a href={menu.link} {...menu.target ? { target: '_blank' } : ''}>
                  {menu.title}
                </a>
              </MenuLink>
            ))}
          </MenuList>
        </MenuWrapper>
        <LangSelect>
          <NavDropdown
            id="nav-dropdown-languages"
            title={currentLang.text}
          >
            {languages.filter(item => item.text !== currentLang.text).map((item, index) => (
              <NavDropdown.Item key={index} onClick={() => handleSelect(item.value)}>
                {item.text}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </LangSelect>
      </Nav>
    </Header>
  );
}

export default Navbar;