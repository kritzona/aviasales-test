import React from 'react'
import RowStyled from './RowStyled'

interface IProps {
  gutter?: boolean
  children?: React.ReactNode
}

const Row = (props: IProps) => {
  return <RowStyled gutter={props.gutter}>{props.children}</RowStyled>
}

export default Row
