import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: #e5e5e5;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 0.5px;
    font-size: 12px;
    font-weight: 600;
    color: black;
  }
  :root{
    --btn-color: #fff;
    --btn-color-alt: #2196F3;
    --btn-color-focus: #0186f3;
    --btn-border: 1px solid black;
    --btn-border-color: #dad9d9;

    --ticket-price-color: #2196F3;
    --ticket-price-size: 24px;
    --ticket-title-color: #a0b0b9;

    --filter-color: #4a4a4a;
    --filter-color-hover: #2196f31f;

    --text-size: 12px;
    --text-color: #4A4A4A;
    
    --background-color: white;

    --transition: all 0.2s ease-out;
  }
`;

export { GlobalStyles };
