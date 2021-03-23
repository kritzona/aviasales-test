import React, { useEffect, useState } from 'react'
import FilterBodyStyled from './FilterBodyStyled'
import FilterItem from '../FilterItem/FilterItem'
import { IFilterItem } from '../Filter'

interface IProps {
  items: IFilterItem[]
  onChange?: (id: string | number) => void
  onCheckAll?: () => void
  onUncheckAll?: () => void
}

const FilterBody = (props: IProps) => {
  const [checkedAll, setCheckedAll] = useState(false)

  const handleClick = (id: string | number) =>
    props.onChange ? props.onChange(id) : null
  const handleCheckAllClick = () => {
    if (!checkedAll && props.onCheckAll) props.onCheckAll()
    else if (checkedAll && props.onUncheckAll) props.onUncheckAll()
  }

  useEffect(() => {
    const findedUncheckedItem = props.items.find((item) => !item.checked)

    if (findedUncheckedItem) setCheckedAll(false)
    else setCheckedAll(true)
  }, [props.items])

  return (
    <FilterBodyStyled>
      <FilterItem
        key="checked-all"
        value="Все"
        checked={checkedAll}
        onClick={() => handleCheckAllClick()}
      />
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
