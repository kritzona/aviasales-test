import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const CheckboxStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border-radius: ${theme.sizes.borderRadius / 2}px;
    border: 1px solid ${theme.colors.lightGreyColor};
    background-color: ${theme.colors.whiteColor};
    cursor: pointer;
    transition: ${theme.effects.defaultTransition};

    &:hover {
      border: 1px solid ${theme.colors.primaryColor};
    }
  `}
`

export default CheckboxStyled
