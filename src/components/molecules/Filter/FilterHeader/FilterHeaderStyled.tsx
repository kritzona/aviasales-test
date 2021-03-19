import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FilterHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default FilterHeaderStyled
