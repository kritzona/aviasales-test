import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TicketStyled = styled.div<IProps>`
  ${({ theme }) => css`
    cursor: pointer;
  `}
`
export const TicketCardWrapperStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding: ${theme.sizes.stepSize * 2}px;

    & > *:not(:first-child) {
      margin-top: ${theme.sizes.stepSize * 2}px;
    }
  `}
`

export default TicketStyled
