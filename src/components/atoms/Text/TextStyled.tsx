import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  weight?: 'regular' | 'semibold' | 'bold'
  transform?: 'uppercase' | 'lowercase'
  theme: DefaultTheme
}

const TextStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const LargeText = styled.span<IProps>`
  ${({ theme, weight, transform }) => css`
    font-size: ${theme.sizes.tlFontSize}px;
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.tlLineHeight}px;

    font-weight: ${() => {
      switch (weight) {
        case 'regular':
          return theme.sizes.regularFontWeight
        case 'semibold':
          return theme.sizes.semiBoldFontWeight
        case 'bold':
          return theme.sizes.boldFontWeight

        default:
          return theme.sizes.regularFontWeight
      }
    }};

    ${transform &&
    css`
      text-transform: ${transform};
    `}
  `}
`
export const MediumText = styled.span<IProps>`
  ${({ theme, weight, transform }) => css`
    font-size: ${theme.sizes.tmFontSize}px;
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.tmLineHeight}px;

    font-weight: ${() => {
      switch (weight) {
        case 'regular':
          return theme.sizes.regularFontWeight
        case 'semibold':
          return theme.sizes.semiBoldFontWeight
        case 'bold':
          return theme.sizes.boldFontWeight

        default:
          return theme.sizes.regularFontWeight
      }
    }};

    ${transform &&
    css`
      text-transform: ${transform};
    `}
  `}
`
export const NormalText = styled.span<IProps>`
  ${({ theme, weight, transform }) => css`
    font-size: ${theme.sizes.tnFontSize}px;
    font-style: normal;
    font-stretch: normal;
    line-height: ${theme.sizes.tnLineHeight}px;

    font-weight: ${() => {
      switch (weight) {
        case 'regular':
          return theme.sizes.regularFontWeight
        case 'semibold':
          return theme.sizes.semiBoldFontWeight
        case 'bold':
          return theme.sizes.boldFontWeight

        default:
          return theme.sizes.regularFontWeight
      }
    }};

    ${transform &&
    css`
      text-transform: ${transform};
    `}
  `}
`

export default TextStyled
