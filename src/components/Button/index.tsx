import React from 'react';
import { ButtonContainer } from './styles';

export interface ButtonInterface {
    highlight?: boolean;
    width?: string;
    children: string;
};

const Button: React.FC<ButtonInterface & React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return (
      <ButtonContainer {...props }>
          { props.children }
      </ButtonContainer>
  );
}

export default Button;