import React from 'react'
import SidebarStyled from './SidebarStyled'
import Filter, { IFilterItem } from '../../molecules/Filter/Filter'

interface IProps {
  filterItems: IFilterItem[]
  onFilterChange?: (checkedIdList: (string | number)[]) => void
}

const Sidebar = (props: IProps) => {
  const handleFilterChange = (checkedIdList: (string | number)[]) =>
    props.onFilterChange ? props.onFilterChange(checkedIdList) : null

  return (
    <SidebarStyled>
      <Filter
        title="Количество пересадок"
        items={props.filterItems}
        onChange={(checkedIdList) => handleFilterChange(checkedIdList)}
      />
    </SidebarStyled>
  )
}

export default Sidebar
