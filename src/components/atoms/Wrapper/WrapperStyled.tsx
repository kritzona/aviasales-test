import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const WrapperStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default WrapperStyled
