import styled, { css, DefaultTheme } from 'styled-components'
import LogoIconSource from '../../../assets/icons/logo.svg'

interface IProps {
  theme: DefaultTheme
}

const LogotypeStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: ${theme.sizes.stepSize * 6}px;
    height: ${theme.sizes.stepSize * 6}px;
    background-image: url(${LogoIconSource});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    cursor: pointer;
    filter: drop-shadow(${theme.effects.cardBoxShadow});
  `}
`

export default LogotypeStyled
