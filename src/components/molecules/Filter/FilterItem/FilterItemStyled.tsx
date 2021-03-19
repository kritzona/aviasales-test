import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FilterItemStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default FilterItemStyled
