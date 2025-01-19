import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background || '#ffffff'};
    color: ${({ theme }) => theme.text || '#000000'};
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`
