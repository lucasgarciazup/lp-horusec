import Citric, { Container, Image, Link, Select, Text } from 'citric';
import React from 'react';

// import { Container } from './styles';

import logo from '../../assets/logos/app.png';
import { Hamburguer, Header, LangSelect, MenuItem, MenuList, MenuWrapper, Nav } from './styles';

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

  return (
    <Citric>
      <Header>
        <Nav>
          <div>
            <Image img={logo} width="160px" height="auto" type='scale-down' />
          </div>
          <Hamburguer>H</Hamburguer>
          <MenuWrapper>
            <MenuList>
              {menus.map(menu => (
                <MenuItem key={menu.title}>
                  <Link path={menu.link} {...menu.target ? { target: '_blank' } : ''}>
                    {menu.title}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </MenuWrapper>
          <LangSelect>
            <Select items={languages} onSelected={() => { }} initialSelected={languages[0].text} />
          </LangSelect>
        </Nav>
      </Header>
    </Citric>
  );
}

export default Navbar;