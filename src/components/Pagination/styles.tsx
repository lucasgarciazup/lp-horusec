import { withPrefix } from "gatsby"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #b4b4b4;
  box-sizing: border-box;
  border-radius: 4px;
  gap: 5px;

  & > * {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    gap: 10px;
    padding: 0;
  }

  ul > li {
    display: none;
  }

  ul > li:first-child,
  ul > li:last-child {
    display: block;
  }

  ul > li.disabled * div {
    cursor: not-allowed !important;
    opacity: 0.4;
  }
`

export const Previous = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 100%;
  position: relative;

  ::after {
    content: url(${withPrefix("icons/chevron-left.svg")});
    position: absolute;
    top: 25%;
    left: 25%;
  }
`

export const Next = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 100%;
  position: relative;

  ::after {
    content: url(${withPrefix("icons/chevron-right.svg")});
    position: absolute;
    top: 25%;
    right: 25%;
  }
`

export const PerPage = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 100%;
  position: relative;

  ::after {
    content: url(${withPrefix("icons/chevron-down.svg")}) !important;
    border: none !important;
    position: absolute;
    top: 20%;
    right: 21%;
    margin: 0 !important;
  }
`
