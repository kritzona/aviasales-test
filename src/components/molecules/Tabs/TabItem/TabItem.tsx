import React from 'react'
import TabItemStyled from './TabItemStyled'

interface IProps {
  children?: React.ReactNode
}

const TabItem = (props: IProps) => {
  return <TabItemStyled>{props.children}</TabItemStyled>
}

export default TabItem
