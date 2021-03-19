import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TabItemStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default TabItemStyled
