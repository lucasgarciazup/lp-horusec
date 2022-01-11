import { Container, Text } from 'citric';
import React from 'react';
import { Copyright, List, Wrapper } from './styles';

// import { Container } from './styles';
import opensource from '../../assets/logos/opensource.png';
import zup from '../../assets/logos/zup.png';

const Footer: React.FC = () => {
  return (
      <Wrapper>
            <List>
                <ul>
                    <li>
                        <img src={opensource} alt="Opensource logo" />
                        <img src={zup} alt='Zup logo'/>
                    </li>
                    <li>
                        <h4>Horusec</h4>
                        <ul>
                            <li>Tecnologias</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Comunidade</h4>
                        <ul>
                            <li>Tecnologias</li>
                            <li>Blog</li>
                            <li>Tech Radar</li>
                            <li>Eventos</li>
                            <li>Política de privacidade</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Redes sociais</h4>
                        <ul>
                            <li>Twitter</li>
                            <li>Youtube</li>
                            <li>Github</li>
                            <li>Linkedin</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Quem somos</h4>
                        <ul>
                            <li>Sobre nós</li>
                            <li>Contato</li>
                        </ul>
                    </li>
                </ul>
            </List>
            <Copyright>©Copyright 2021 Zup. Todos os direitos reservados.</Copyright>
      </Wrapper>
  );
}

export default Footer;