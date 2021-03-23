import React from 'react'
import FilterBodyStyled from './FilterBodyStyled'
import FilterItem from '../FilterItem/FilterItem'
import { IFilterItem } from '../Filter'

interface IProps {
  items: IFilterItem[]
  onChange?: (id: string | number) => void
}

const FilterBody = (props: IProps) => {
  const handleClick = (id: string | number) =>
    props.onChange ? props.onChange(id) : null

  return (
    <FilterBodyStyled>
      {props.items.map((item) => {
        return (
          <FilterItem
            key={item.id}
            value={item.value}
            checked={item.checked}
            onClick={() => handleClick(item.id)}
          />
        )
      })}
    </FilterBodyStyled>
  )
}

export default FilterBody
