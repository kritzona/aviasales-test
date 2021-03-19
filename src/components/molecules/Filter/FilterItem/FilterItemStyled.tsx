import styled, { css, DefaultTheme } from 'styled-components'
import { rgba } from 'polished'
import CheckboxStyled from '../../../atoms/Checkbox/CheckboxStyled'

interface IProps {
  theme: DefaultTheme
}

const FilterItemStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: ${theme.sizes.stepSize * 2}px;
    padding-right: ${theme.sizes.stepSize * 2}px;
    padding-top: ${theme.sizes.stepSize}px;
    padding-bottom: ${theme.sizes.stepSize}px;
    transition: ${theme.effects.defaultTransition};
    cursor: pointer;

    &:hover {
      background-color: ${rgba(theme.colors.primaryColor, 0.05)};
    }
    &:hover ${CheckboxStyled} {
      border: 1px solid ${theme.colors.primaryColor};
    }

    & > *:not(:first-child) {
      margin-left: ${theme.sizes.stepSize}px;
    }
  `}
`

export default FilterItemStyled
