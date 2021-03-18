import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TabsStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default TabsStyled
