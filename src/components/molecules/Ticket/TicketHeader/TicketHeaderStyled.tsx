import styled, { css, DefaultTheme } from 'styled-components'
import S7LogoImageSource from '../../../../assets/images/s7-logo.png'

interface IProps {
  theme: DefaultTheme
}
interface ILogoProps {
  imageSource: string
  theme: DefaultTheme
}

const TicketHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`
export const TicketHeaderPriceStyled = styled.div<IProps>`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
  `}
`
export const TicketHeaderLogoStyled = styled.div<ILogoProps>`
  ${({ theme, imageSource }) => css`
    width: 110px;
    height: 36px;
    background-image: url(${imageSource});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: contain;
  `}
`

export default TicketHeaderStyled
