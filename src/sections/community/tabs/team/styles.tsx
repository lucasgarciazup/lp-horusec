import styled from 'styled-components';
import Img from 'gatsby-image';

export const Avatar = styled(Img)`
    filter: grayscale(1);
    border-radius: 8px;
`;

export const Name = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    color: #113B65;
    margin: 0;
`; 

export const Role = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    color: #FF6D00;
    margin: 0;
`;

export const Social = styled.div`
    display: flex;
    gap: 5px;

    a, a:hover {
        text-decoration: none;
        color: #113B65;
    }
`;