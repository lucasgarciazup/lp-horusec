import React from 'react';

// import { Container } from './styles';

interface Props { 
  title: string
}

function Menubar({ title }: Props ) {
  return <h1>{title}</h1>;
}

export default Menubar;