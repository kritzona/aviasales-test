import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TicketsStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default TicketsStyled
