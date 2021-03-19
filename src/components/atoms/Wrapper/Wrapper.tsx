import React from 'react'
import WrapperStyled from './WrapperStyled'

interface IProps {
  paddingX?: boolean
  paddingY?: boolean
  children?: React.ReactNode
}

const Wrapper = (props: IProps) => {
  return (
    <WrapperStyled paddingX={props.paddingX} paddingY={props.paddingY}>
      {props.children}
    </WrapperStyled>
  )
}

export default Wrapper
