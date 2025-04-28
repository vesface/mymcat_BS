import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue LT Pro', sans-serif;
    background: #0a0a2a;
    color: white;
  }

  @font-face {
    font-family: 'Helvetica Neue LT Pro';
    src: url('https://fonts.cdnfonts.com/css/helvetica-neue-lt-pro') format('woff2');
  }

  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
); 