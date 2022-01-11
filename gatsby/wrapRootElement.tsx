import React from 'react';
import { ThemeProvider } from 'styled-components';
import horusecTheme from '../src/styles/themes/horusec';

export function wrapRootElement({ element }) {
    const theme = { ...horusecTheme }
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
}