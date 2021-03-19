import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FilterBodyStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`

export default FilterBodyStyled
