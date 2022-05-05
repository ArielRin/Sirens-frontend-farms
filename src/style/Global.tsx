import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    align-items: center;
    background-image: url('/images/egg/shimmer.png');
    background-repeat: no-repeat;
    background-position: auto;
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
