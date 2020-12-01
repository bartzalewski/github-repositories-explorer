import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, &::after {
    box-sizing: border-box;
  }

  body {
    background: #e4e4e4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
    font-weight: 400;
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
  }

  input, button {
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    min-height: 40px;
    border-radius: 2px;
    font-weight: 400;
    font-size: 15px;
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
