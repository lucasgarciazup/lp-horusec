import { Tabs } from 'react-bootstrap';
import styled from 'styled-components';

export const TabStyled = styled(Tabs)`

    .nav-link {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        color: #1A2138 !important;
    }
    .nav-link:hover {
        border-top: none;
        border-left: none;
        border-right: none;
    }

    .nav-link.active {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #1A2138 !important;

        border-color: transparent transparent #FF6D00 !important;
        border-width: 2px;
    }
`;
