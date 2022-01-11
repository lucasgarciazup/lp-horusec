import React from 'react';
import { ThemeProvider } from 'styled-components';

export function wrapRootElement({ element }) {
    const theme = {}
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
}