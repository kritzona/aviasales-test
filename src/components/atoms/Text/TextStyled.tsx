import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TextStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default TextStyled
