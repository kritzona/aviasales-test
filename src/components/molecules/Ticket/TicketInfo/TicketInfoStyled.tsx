import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TicketInfoStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default TicketInfoStyled
