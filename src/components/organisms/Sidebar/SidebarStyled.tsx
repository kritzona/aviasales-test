import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const SidebarStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default SidebarStyled
