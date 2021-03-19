import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const FilterHeaderStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding: ${theme.sizes.stepSize * 2}px;
    padding-bottom: ${theme.sizes.stepSize}px;
  `}
`

export default FilterHeaderStyled
