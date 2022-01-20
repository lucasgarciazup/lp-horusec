import { Tabs } from "react-bootstrap"
import styled from "styled-components"

export const TabStyled = styled(Tabs)`
  .nav-link {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #1a2138 !important;
    border: none;
  }

  .nav-link,
  .nav-link:hover {
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
  }

  .nav-link.active {
    font-weight: 500;
    color: #1a2138 !important;
    background-color: transparent !important;
    border-color: #ff6d00 !important;
    border-width: 2px;
    border-style: solid;
  }
`
