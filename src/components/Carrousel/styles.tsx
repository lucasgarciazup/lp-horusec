import styled from "styled-components"

export const DotItem = styled.div`
  width: 32px;
  height: 4px;
  cursor: pointer;
  background: #8c909c;
  border-radius: 21px;

  &.is-active,
  &:hover {
    background: #113b65;
  }
`
