import React, { useState } from 'react'
import FilterStyled from './FilterStyled'
import Card from '../Card/Card'
import FilterHeader from './FilterHeader/FilterHeader'
import FilterBody from './FilterBody/FilterBody'

export interface IFilterItem {
  id: string | number
  value: string
  checked: boolean
}
interface IProps {
  title: string
  items: IFilterItem[]
  onChange?: (checkedIdList: (string | number)[]) => void
}

const Filter = (props: IProps) => {
  const [localItems, setLocalItems] = useState(props.items)

  const handleChange = (id: string | number) => {
    checkItem(id)

    if (props.onChange) props.onChange(getFilterResult())
  }
  const handleCheckAll = () => {
    checkAllItems()

    if (props.onChange) props.onChange(getFilterResult())
  }
  const handleUncheckAll = () => {
    uncheckAllItems()

    if (props.onChange) props.onChange(getFilterResult())
  }

  const checkItem = (id: string | number) => {
    setLocalItems(
      localItems.map((item) => {
        if (item.id === id) item.checked = !item.checked

        return item
      }),
    )
  }
  const checkAllItems = () => {
    setLocalItems(
      localItems.map((item) => {
        item.checked = true

        return item
      }),
    )
  }
  const uncheckAllItems = () => {
    setLocalItems(
      localItems.map((item) => {
        item.checked = false

        return item
      }),
    )
  }
  const getFilterResult = () => {
    return localItems
      .filter((item) => {
        return item.checked
      })
      .map((item) => item.id)
  }

  return (
    <FilterStyled>
      <Card>
        <>
          <FilterHeader title={props.title} />
          <FilterBody
            items={localItems}
            onChange={(id) => handleChange(id)}
            onCheckAll={() => handleCheckAll()}
            onUncheckAll={() => handleUncheckAll()}
          />
        </>
      </Card>
    </FilterStyled>
  )
}

export default Filter
