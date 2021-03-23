import React from 'react'
import TabItemStyled from './TabItemStyled'

interface IProps {
  checked: boolean
  children?: React.ReactNode
}

const TabItem = (props: IProps) => {
  return <TabItemStyled checked={props.checked}>{props.children}</TabItemStyled>
}

export default TabItem
