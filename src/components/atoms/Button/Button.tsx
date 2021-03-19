import React from 'react'
import ButtonStyled from './ButtonStyled'

interface IProps {
  type?: 'button' | 'reset' | 'submit'
  children?: React.ReactNode
  onClick?: () => void
}

const Button = (props: IProps) => {
  const handleClick = () => (props.onClick ? props.onClick() : null)

  return (
    <ButtonStyled type={props.type} onClick={() => handleClick()}>
      {props.children}
    </ButtonStyled>
  )
}

export default Button
