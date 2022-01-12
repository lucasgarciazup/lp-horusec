import styled from 'styled-components';

export const Section = styled.section`
    padding: 100px 0;
`;

export const Title = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 80px;

    color: ${props => props.theme.colors.secondary};
`;

export const SubTitle = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.caption};
    margin-bottom: 32px;
`;

export const Download = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;

    width: 176px;
    height: 48px;

    /* Primary/Main */

    background: #FF6D00;
    border-radius: 4px;
    color: white;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    text-decoration: none;


    &:hover {
        color: white;
    }
`;

export const Contribute = styled.a`
   /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;

    width: 176px;
    height: 48px;
    /* Secondary/Main */

    border: 1px solid #113B65;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: #113B65;

    text-decoration: none;

    &:hover {
        color: #113B65;
    }
`;

export const Banner = styled.img`

    box-shadow: 0px 4px 32px -8px rgba(0, 0, 0, 0.12);
    border-radius: 8px;

    width: 100%;
    max-width: 560px;

`