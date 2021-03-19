import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  paddingX?: boolean
  paddingY?: boolean
}

const WrapperStyled = styled.div<IProps>`
  ${({ theme, paddingX, paddingY }) => css`
    width: 1140px;
    margin: 0 auto;
    padding: ${paddingY ? `${theme.sizes.stepSize * 5}px` : '0'}
      ${paddingX === undefined || paddingX ? '15px' : '0'};
    box-sizing: border-box;
    position: relative;

    @media ${theme.mediaQueries.desktop} {
      padding: ${paddingY ? `${theme.sizes.stepSize * 5}px` : '0'}
        ${paddingX === undefined || paddingX ? '15px' : '0'};
      width: 1140px;
    }
    @media ${theme.mediaQueries.laptop} {
      padding: ${paddingY ? `${theme.sizes.stepSize * 5}px` : '0'}
        ${paddingX === undefined || paddingX ? '15px' : '0'};
      width: 960px;
    }
    @media ${theme.mediaQueries.tablet} {
      padding: ${paddingY ? `${theme.sizes.stepSize * 5}px` : '0'}
        ${paddingX === undefined || paddingX ? '15px' : '0'};
      width: 720px;
    }
    @media ${theme.mediaQueries.phablet} {
      padding: ${paddingY ? `${theme.sizes.stepSize * 5}px` : '0'}
        ${paddingX === undefined || paddingX ? '15px' : '0'};
      width: 540px;
    }
    @media ${theme.mediaQueries.mobile} {
      padding: ${paddingY ? `${theme.sizes.stepSize * 5}px` : '0'}
        ${paddingX === undefined || paddingX ? '15px' : '0'};
      width: 100%;
    }
  `}
`

export default WrapperStyled
