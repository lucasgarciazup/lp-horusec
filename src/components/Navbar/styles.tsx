import styled from 'styled-components';

import arrowDown from '../../assets/icons/arrow-down.svg';

export const Header = styled.header`
    background: #fff;
    box-shadow: #00000052 0 1px 5px 0px;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 100px;
`;

export const Hamburguer = styled.button`
    display: none;

    @media (max-width: 769px) {
        display: block;
    }
`;

export const MenuWrapper = styled.div`
    width: 100%;

    @media (max-width: 769px) {
        background: white;
    }
`;

export const MenuList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    list-style: none;

    padding: 0;

    @media (max-width: 769px) {
    
    }
`;

export const MenuLink = styled.li`

    a {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        color: ${props => props.theme.colors.link};
        text-decoration: none;
    }

`;

export const LangSelect = styled.div`

    display: block;
    width: 200px;

    #nav-dropdown-languages { 
        color: #404659;
        border: 1px solid #404659;
        box-sizing: border-box;
        border-radius: 4px;
    }

    #nav-dropdown-languages::after {
        content: url(${arrowDown});
        margin-left: 0.5em;
        vertical-align: 0;
        border: none;
    }
`;
