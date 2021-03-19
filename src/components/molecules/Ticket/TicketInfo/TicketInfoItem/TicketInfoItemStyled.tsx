import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TicketInfoItemStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default TicketInfoItemStyled
