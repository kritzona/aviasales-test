import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
}

const MainContentStyled = styled.div<IProps>`
  ${({ theme }) => css`
    padding-bottom: ${theme.sizes.stepSize * 5}px;
  `}
`

export default MainContentStyled
