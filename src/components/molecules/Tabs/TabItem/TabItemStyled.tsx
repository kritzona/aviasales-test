import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TabItemStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.sizes.stepSize * 1.5}px;
    background-color: ${theme.colors.whiteColor};
    color: ${theme.colors.blackColor};
    cursor: pointer;
    text-align: center;
    transition: ${theme.effects.defaultTransition};

    &:hover {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.whiteColor};
    }
  `}
`

export default TabItemStyled
