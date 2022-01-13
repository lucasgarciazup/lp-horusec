import styled from 'styled-components';


export const FooterContainer = styled.footer`
    padding: 56px 0 32px;
    background: ${props => props.theme.colors.background};
`;

export const Topic = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  gap: 10px;
  padding: 0;
  flex-wrap: wrap;
  flex-direction: column;
  li {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #404659;
  }
  
  li > a {
    color: #404659 !important;
    text-decoration: none;
  }
  
`;

export const Copyright = styled.p`
    margin-top: 32px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #8C909C;
`;

