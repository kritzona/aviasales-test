import styled, { css, DefaultTheme } from 'styled-components'
import checkIconSource from '../../../assets/icons/check.svg'

interface IProps {
  checked: boolean
  theme: DefaultTheme
}

const CheckboxStyled = styled.div<IProps>`
  ${({ theme, checked }) => css`
    width: 20px;
    height: 20px;
    border-radius: ${theme.sizes.borderRadius / 2}px;

    background-color: ${theme.colors.whiteColor};
    cursor: pointer;
    transition: ${theme.effects.defaultTransition};

    ${!checked &&
    css`
      border: 1px solid ${theme.colors.lightGreyColor};
    `}
    ${checked &&
    css`
      border: 1px solid ${theme.colors.primaryColor};
      background-image: url(${checkIconSource});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 12px 8px;
    `}

    &:hover {
      border: 1px solid ${theme.colors.primaryColor};
    }
  `}
`

export default CheckboxStyled
