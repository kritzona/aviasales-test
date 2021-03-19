import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const HeaderStyled = styled.div<IProps>`
  ${({ theme }) => css``}
`
export const HeaderLogotypeStyled = styled.div<IProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  `}
`

export default HeaderStyled
