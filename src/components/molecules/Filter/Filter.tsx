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
}

const Filter = (props: IProps) => {
  const [localItems, setLocalItems] = useState(props.items)

  const handleChange = (id: string | number) => {
    checkItem(id)
  }

  const checkItem = (id: string | number) => {
    setLocalItems(
      localItems.map((item) => {
        if (item.id === id) item.checked = !item.checked

        return item
      }),
    )
  }

  return (
    <FilterStyled>
      <Card>
        <>
          <FilterHeader title={props.title} />
          <FilterBody items={localItems} onChange={(id) => handleChange(id)} />
        </>
      </Card>
    </FilterStyled>
  )
}

export default Filter
