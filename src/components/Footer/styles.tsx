import styled from 'styled-components';

export const Wrapper = styled.footer`
    background: ${props => props.theme.colors.background };
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
`;

export const List = styled.div`
  width: 100%;
  font-family: Roboto;
  font-style: normal;

  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
  }

  li:first-child {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  li {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    padding: 0;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  li > ul {
    justify-content: flex-start;
    flex-direction: column;
    gap: 8px;
  }
`;

export const Copyright = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #8C909C;
`;

