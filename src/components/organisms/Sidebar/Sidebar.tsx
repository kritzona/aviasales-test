import React from 'react'
import SidebarStyled from './SidebarStyled'
import Filter from '../../molecules/Filter/Filter'

interface IProps {}

const Sidebar = (props: IProps) => {
  return (
    <SidebarStyled>
      <Filter />
    </SidebarStyled>
  )
}

export default Sidebar
