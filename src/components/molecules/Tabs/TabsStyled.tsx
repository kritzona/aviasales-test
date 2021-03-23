import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const TabsStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid ${theme.colors.lightGreyColor};
  `}
`
export const TabItemWrapperStyled = styled.div<IProps>`
  ${({ theme }) => css`
    width: 100%;

    &:not(:first-child) {
      border-left: 1px solid ${theme.colors.lightGreyColor};
    }

    &:hover:not(:first-child),
    &:hover:not(:first-child) + div {
      border-left: 1px solid ${theme.colors.primaryColor};
    }

    &:hover:first-child + div {
      border-left: 1px solid ${theme.colors.primaryColor};
    }
  `}
`

export default TabsStyled
