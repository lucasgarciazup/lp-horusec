import React from "react"
import { ButtonContainer } from "./styles"
import { ButtonInterface } from "../../interfaces/button.interface"

const Button: React.FC<
  ButtonInterface & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = props => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>
}

export default Button
