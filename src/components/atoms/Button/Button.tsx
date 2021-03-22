import React from 'react'
import ButtonStyled from './ButtonStyled'
import Text from '../Text/Text'

interface IProps {
  type?: 'button' | 'reset' | 'submit'
  children?: React.ReactNode
  onClick?: () => void
}

const Button = (props: IProps) => {
  const handleClick = () => (props.onClick ? props.onClick() : null)

  return (
    <ButtonStyled type={props.type} onClick={() => handleClick()}>
      <Text type="normal-text" weight="semibold" transform="uppercase">
        {props.children}
      </Text>
    </ButtonStyled>
  )
}

export default Button
