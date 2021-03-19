import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const MainContentStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default MainContentStyled
