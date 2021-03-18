import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const CheckboxStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default CheckboxStyled
