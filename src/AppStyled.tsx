import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const AppStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default AppStyled
