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
    --color-cyan:  hsl(180, 66%, 49%);
    --color-dark-violet: hsl(257, 27%, 26%);
    --color-red:hsl(0, 87%, 67%);
    --color-gray: hsl(0, 0%, 75%);
    --color-grayish-violet: hsl(257, 7%, 63%);
    --color-very-dark-blue: hsl(255, 11%, 22%);
    --color-very-dark-violet: hsl(260, 8%, 14%);
    --color-white: hsl(0, 0%, 100%);
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: ${18 / 16}rem;
  }
`;

export default GlobalStyles;
