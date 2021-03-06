import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { withPrefix } from "gatsby"

const menuCss = css`
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

  @media (max-width: 992px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1.6px;
    color: #1a2138;
    border-bottom: 1px solid #000000;
  }
`
export const MenuLink = styled(Link)`
  ${menuCss}
`

export const MenuLinkExternal = styled("a")`
  ${menuCss}
`

export const IconLink = styled("a")`
  color: #404659;
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

  #nav-dropdown-languages-mobile {
    display: flex;
    justify-content: space-around;
    color: #404659;
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
  }

  #nav-dropdown-languages::after,
  #nav-dropdown-languages-mobile::after {
    content: url(${() => withPrefix("icons/arrow-down.svg")});
    margin-left: 0.5em;
    vertical-align: 0;
    border: none;
  }

  .dropdown-menu {
    min-width: 100% !important;
  }
`
