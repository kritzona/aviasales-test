import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TicketInfoItemStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export const TicketInfoItemTitleStyled = styled.div<IProps>`
  ${({ theme }) => css`
    color: ${theme.colors.greyColor};
  `}
`
export const TicketInfoItemValueStyled = styled.div<IProps>`
  ${({ theme }) => css`
    color: ${theme.colors.blackColor};
  `}
`

export default TicketInfoItemStyled
