import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

 @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');

 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background: linear-gradient(to bottom, #ffffff,rgb(167, 151, 151)); 
    color: #333;
    min-height: 100vh;
    background-attachment: fixed; /* só para nao rolar */
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;