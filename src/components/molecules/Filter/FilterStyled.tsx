import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FilterStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default FilterStyled
