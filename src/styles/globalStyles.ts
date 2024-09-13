import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    font-family: Arial, sans-serif;
    font-size: 24px;
    line-height: 1.6;
    display: flex;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: none;
    cursor: pointer;
    font-size: 20px;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
