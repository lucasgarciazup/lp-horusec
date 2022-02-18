import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  button {
    cursor: pointer;
  }


  @media(max-width: 992px) {
    #basic-navbar-nav.collapsing, #basic-navbar-nav.show {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 95vh;
    }
  }
`
