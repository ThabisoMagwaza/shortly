'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }

  /*
    Project resets
  */
  
  html {
    --color-primary-14: hsl(257, 8%, 14%);
    --color-primary-21: hsl(257, 11%, 21%);
    --color-primary-26: hsl(257, 27%, 26%);
    --color-primary-33: hsl(257, 26%, 33%);
    --color-primary-40: hsl(257, 8%, 40%);
    --color-primary-63: hsl(257, 8%, 63%);
    --color-primary-95: hsl(255, 32%, 95%);

    --color-secondary-49: hsl(180, 66%, 49%);
    --color-secondary-75: hsl(180, 66%, 75%);

    --color-accent-67: hsl(0, 86% ,67%);
    --color-accent-87: hsl(0, 86% ,87%);

    --color-white: hsl(0, 0%, 100%);
    --color-gray-59: hsl(0, 0%, 85%);
    --color-gray-75: hsl(0, 0%, 75%);
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: ${18 / 16}rem;
  }
`;

export default GlobalStyles;
