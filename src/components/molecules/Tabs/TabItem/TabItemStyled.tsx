import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  checked: boolean
  theme: DefaultTheme
}

const TabItemStyled = styled.div<IProps>`
  ${({ theme, checked }) => css`
    width: 100%;
    padding: ${theme.sizes.stepSize * 1.5}px;
    cursor: pointer;
    text-align: center;
    transition: ${theme.effects.defaultTransition};

    ${!checked &&
    css`
      background-color: ${theme.colors.whiteColor};
      color: ${theme.colors.blackColor};
    `}
    ${checked &&
    css`
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.whiteColor};
    `}
    
    &:hover {
      background-color: ${theme.colors.primaryColor};
      color: ${theme.colors.whiteColor};
    }
  `}
`

export default TabItemStyled
