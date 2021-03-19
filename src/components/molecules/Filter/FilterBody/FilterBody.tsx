import React from 'react'
import FilterBodyStyled from './FilterBodyStyled'
import FilterItem from '../FilterItem/FilterItem'

interface IProps {}

const FilterBody = (props: IProps) => {
  return (
    <FilterBodyStyled>
      <FilterItem />
      <FilterItem />
      <FilterItem />
    </FilterBodyStyled>
  )
}

export default FilterBody
