import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const HomeViewStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default HomeViewStyled
