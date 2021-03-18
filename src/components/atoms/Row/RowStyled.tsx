import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const RowStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default RowStyled
