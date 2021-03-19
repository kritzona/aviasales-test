import 'styled-components'

interface IThemeColors {
  primaryColor: string
  hoverPrimaryColor: string
  activePrimaryColor: string

  errorColor: string
  successColor: string
  infoColor: string

  whiteColor: string
  blackColor: string
  greyColor: string
  lightGreyColor: string

  backgroundColor: string
}
interface IThemeSizes {
  stepSize: number

  borderRadius: number

  tlFontSize: number
  tlLineHeight: number

  tmFontSize: number
  tmLineHeight: number

  tnFontSize: number
  tnLineHeight: number

  regularFontWeight: number
  semiBoldFontWeight: number
  boldFontWeight: number
}
interface IThemeEffects {
  cardBoxShadow: string
  defaultTransition: string
}
interface IThemeMediaQueries {
  desktop: string
  laptop: string
  tablet: string
  phablet: string
  mobile: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    colors: IThemeColors
    sizes: IThemeSizes
    effects: IThemeEffects
    mediaQueries: IThemeMediaQueries
  }
}
