import React from 'react'
import ColumnStyled from './ColumnStyled'

interface IProps {
  size?: number
  desktopSize?: number
  laptopSize?: number
  tabletSize?: number
  phabletSize?: number
  mobileSize?: number
  children?: React.ReactNode
}

const Column = (props: IProps) => {
  return (
    <ColumnStyled
      defaultSize={props.size}
      desktopSize={props.desktopSize}
      laptopSize={props.laptopSize}
      tabletSize={props.tabletSize}
      phabletSize={props.phabletSize}
      mobileSize={props.mobileSize}
    >
      {props.children}
    </ColumnStyled>
  )
}

export default Column
