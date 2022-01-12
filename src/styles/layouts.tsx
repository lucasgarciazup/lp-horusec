import styled from 'styled-components';

interface SectionInterface {
    dark?: true;
}

export const Section = styled.section<SectionInterface>`
    padding: 56px 0;
    background: ${props => props.dark ? '#F5F6F7' : '#FFFF'};
`;

export const TitleSection = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 24px;

    color: ${props => props.theme.colors.secondary};
`;

export const SubTitleSection = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${props => props.theme.colors.caption};
    margin-bottom: 32px;
    text-align: center;
`;


