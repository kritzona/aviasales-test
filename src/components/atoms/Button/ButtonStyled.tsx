import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const ButtonStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default ButtonStyled
