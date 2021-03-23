import React from 'react'
import SidebarStyled from './SidebarStyled'
import Filter, { IFilterItem } from '../../molecules/Filter/Filter'

interface IProps {
  filterItems: IFilterItem[]
}

const Sidebar = (props: IProps) => {
  return (
    <SidebarStyled>
      <Filter title="Количество пересадок" items={props.filterItems} />
    </SidebarStyled>
  )
}

export default Sidebar
