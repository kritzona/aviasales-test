import { DefaultTheme } from 'styled-components'

const LightTheme: DefaultTheme = {
  name: 'light',
  sizes: {
    stepSize: 0,

    borderRadius: 0,

    tlFontSize: 0,
    tlLineHeight: 0,

    tmFontSize: 0,
    tmLineHeight: 0,

    tnFontSize: 0,
    tnLineHeight: 0,

    tsFontSize: 0,
    tsLineHeight: 0,

    regularFontWeight: 0,
    semiBoldFontWeight: 0,
    boldFontWeight: 0,
  },
  colors: {
    primaryColor: '',
    hoverPrimaryColor: '',
    activePrimaryColor: '',

    errorColor: '',
    successColor: '',
    infoColor: '',

    whiteColor: '',
    blackColor: '',
    greyColor: '',
    lightGreyColor: '',

    backgroundColor: '#F3F7FA',
  },
  effects: {
    cardBoxShadow: '',
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
