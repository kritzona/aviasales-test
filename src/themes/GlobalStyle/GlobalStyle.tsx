import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-stretch: normal;
      -webkit-font-smoothing: subpixel-antialiased;
      background-color: ${theme.colors.backgroundColor};
    }

    a {
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `}
`

export default GlobalStyle
