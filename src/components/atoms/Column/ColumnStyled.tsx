import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  defaultSize?: number
  desktopSize?: number
  laptopSize?: number
  tabletSize?: number
  phabletSize?: number
  mobileSize?: number
}

const ColumnStyled = styled.div<IProps>`
  ${({
    theme,
    defaultSize,
    desktopSize,
    laptopSize,
    tabletSize,
    phabletSize,
    mobileSize,
  }) => {
    const desktopColumnSize =
      desktopSize ||
      defaultSize ||
      mobileSize ||
      phabletSize ||
      tabletSize ||
      laptopSize ||
      12
    const laptopColumnSize =
      laptopSize ||
      defaultSize ||
      mobileSize ||
      phabletSize ||
      tabletSize ||
      desktopSize ||
      12
    const tabletColumnSize =
      tabletSize ||
      defaultSize ||
      mobileSize ||
      phabletSize ||
      laptopSize ||
      desktopSize ||
      12
    const phabletColumnSize =
      phabletSize ||
      defaultSize ||
      mobileSize ||
      tabletSize ||
      laptopSize ||
      desktopSize ||
      12
    const mobileColumnSize =
      mobileSize ||
      defaultSize ||
      phabletSize ||
      tabletSize ||
      laptopSize ||
      desktopSize ||
      12

    return css`
      display: grid;
      display: -ms-grid;

      grid-column: span ${desktopColumnSize};
      -ms-grid-column-span: ${desktopColumnSize};

      @media ${theme.mediaQueries.desktop} {
        grid-column: span ${desktopColumnSize <= 12 ? desktopColumnSize : 12};
        -ms-grid-column-span: ${desktopColumnSize <= 12
          ? desktopColumnSize
          : 12};
      }
      @media ${theme.mediaQueries.laptop} {
        grid-column: span ${laptopColumnSize <= 12 ? laptopColumnSize : 12};
        -ms-grid-column-span: ${laptopColumnSize <= 12 ? laptopColumnSize : 12};
      }
      @media ${theme.mediaQueries.tablet} {
        grid-column: span ${tabletColumnSize <= 12 ? tabletColumnSize : 12};
        -ms-grid-column-span: ${tabletColumnSize <= 12 ? tabletColumnSize : 12};
      }
      @media ${theme.mediaQueries.phablet} {
        grid-column: span ${phabletColumnSize <= 12 ? phabletColumnSize : 12};
        -ms-grid-column-span: ${phabletColumnSize <= 12
          ? phabletColumnSize
          : 12};
      }
      @media ${theme.mediaQueries.mobile} {
        grid-column: span ${mobileColumnSize <= 12 ? mobileColumnSize : 12};
        -ms-grid-column-span: ${mobileColumnSize <= 12 ? mobileColumnSize : 12};
      }
    `
  }}
`

export default ColumnStyled
