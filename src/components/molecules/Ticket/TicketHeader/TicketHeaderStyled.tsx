import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TicketHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default TicketHeaderStyled
