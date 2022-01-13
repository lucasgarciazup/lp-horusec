import styled, { css } from "styled-components"
import { ButtonInterface } from "."

export const ButtonContainer = styled.a<ButtonInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;

  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: none;
  width: ${props => props.width || "100%"};
  color: ${props => (props.highlight ? "#ffff" : "#113B65")};

  text-decoration: none;
  border-radius: 4px;
  box-sizing: border-box;
  background: ${props => (props.highlight ? "#FF6D00" : "#ffff")};
  border: 1px solid ${props => (props.highlight ? "#FF6D00" : "#113B65")};
  &:hover {
    opacity: 0.9;
    color: ${props => (props.highlight ? "#ffff" : "#113B65")};
  }
`
