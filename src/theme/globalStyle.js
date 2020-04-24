import { createGlobalStyle } from 'styled-components';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoLight from '../fonts/Roboto-Light.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto Regular";
    src: url(${RobotoRegular});
  }
  @font-face {
    font-family: "Roboto Light";
    src: url(${RobotoLight});
  }
  @font-face {
    font-family: "Roboto Bold";
    src: url(${RobotoBold});
  }

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
    font-family: 'Roboto Regular';
    font-size: 15px;
  }

  input, button {
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    min-height: 40px;
    border-radius: 2px;
    font-family: 'Roboto Regular';
    font-size: 15px;
  }

  #root {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
