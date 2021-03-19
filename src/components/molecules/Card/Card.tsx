import React from 'react'
import CardStyled from './CardStyled'

interface IProps {
  children?: React.ReactNode
}

const Card = (props: IProps) => {
  return <CardStyled>{props.children}</CardStyled>
}

export default Card
