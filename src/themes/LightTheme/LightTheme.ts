import { DefaultTheme } from 'styled-components'

const LightTheme: DefaultTheme = {
  name: 'light',
  sizes: {
    stepSize: 10,

    borderRadius: 5,

    tlFontSize: 24,
    tlLineHeight: 24,

    tmFontSize: 14,
    tmLineHeight: 21,

    tnFontSize: 12,
    tnLineHeight: 18,

    regularFontWeight: 400,
    semiBoldFontWeight: 600,
    boldFontWeight: 700,
  },
  colors: {
    primaryColor: '#2196F3',
    hoverPrimaryColor: '#2196F3',
    activePrimaryColor: '#2196F3',

    errorColor: '#EB5757',
    successColor: '#27AE60',
    infoColor: '#2196F3',

    whiteColor: '#FFFFFF',
    blackColor: '#4A4A4A',
    greyColor: '#A0B0B9',
    lightGreyColor: '#DFE5EC',

    backgroundColor: '#F3F7FA',
  },
  effects: {
    cardBoxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    defaultTransition: 'all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  mediaQueries: {
    desktop: '(min-width: 1200px)',
    laptop: '(min-width: 992px) and (max-width: 1199px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    phablet: '(min-width: 576px) and (max-width: 767px)',
    mobile: '(max-width: 575px)',
  },
}

export default LightTheme
