import { Link } from "gatsby"
import styled from "styled-components"

import arrowDown from "../../assets/icons/arrow-down.svg"

export const MenuLink = styled(Link)`
  padding: 24px 0 !important;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #404659 !important;

  &.active {
    border-bottom: solid #ff6d00 4px;
  }
`

export const LangSelect = styled.div`
  width: 128px;

  #nav-dropdown-languages {
    display: flex;
    justify-content: space-around;
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
`
