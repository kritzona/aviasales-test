import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TicketStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default TicketStyled
