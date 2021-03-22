import styled, { css, DefaultTheme } from 'styled-components'

interface IProps {
  theme: DefaultTheme
  type?: 'button' | 'reset' | 'submit'
}

const ButtonStyled = styled.button.attrs<IProps>((props: IProps) => ({
  type: props.type ? props.type : 'button',
}))`
  ${({ theme }) => css`
    margin: 0;
    padding: ${theme.sizes.stepSize * 1.5}px ${theme.sizes.stepSize * 2}px;
    outline: none;
    box-shadow: ${theme.effects.cardBoxShadow};
    cursor: pointer;
    border-radius: ${theme.sizes.borderRadius}px;
    transform-origin: center center;
    transition: ${theme.effects.defaultTransition};
    -webkit-tap-highlight-color: transparent;

    background-color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    color: ${theme.colors.whiteColor};

    &:hover {
      background-color: ${theme.colors.hoverPrimaryColor};
      border: 1px solid ${theme.colors.hoverPrimaryColor};
      color: ${theme.colors.whiteColor};

      box-shadow: ${theme.effects.cardBoxShadow};
    }

    @media ${theme.mediaQueries.tablet} {
      &:hover {
        background-color: ${theme.colors.primaryColor};
        border: 1px solid ${theme.colors.primaryColor};
        color: ${theme.colors.whiteColor};

        box-shadow: ${theme.effects.cardBoxShadow};
      }
    }
    @media ${theme.mediaQueries.phablet} {
      &:hover {
        background-color: ${theme.colors.primaryColor};
        border: 1px solid ${theme.colors.primaryColor};
        color: ${theme.colors.whiteColor};

        box-shadow: ${theme.effects.cardBoxShadow};
      }
    }
    @media ${theme.mediaQueries.mobile} {
      &:hover {
        background-color: ${theme.colors.primaryColor};
        border: 1px solid ${theme.colors.primaryColor};
        color: ${theme.colors.whiteColor};

        box-shadow: ${theme.effects.cardBoxShadow};
      }
    }

    &:active {
      background-color: ${theme.colors.hoverPrimaryColor};
      border: 1px solid ${theme.colors.hoverPrimaryColor};
      color: ${theme.colors.whiteColor};

      box-shadow: none;
      transform: scale(0.98);
    }
  `}
`

export default ButtonStyled
