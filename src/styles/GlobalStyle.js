import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: ${props => props.theme.colors.lighter};
    background: ${props => props.theme.backgrounds.dark};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 500 16px 'Montserrat Alternates', sans-serif;
  }

  strong, h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.backgrounds.darker};
  }
`
