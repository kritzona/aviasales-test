import React from 'react'
import FilterItemStyled from './FilterItemStyled'
import Checkbox from '../../../atoms/Checkbox/Checkbox'
import Text from '../../../atoms/Text/Text'

interface IProps {}

const FilterItem = (props: IProps) => {
  return (
    <FilterItemStyled>
      <Checkbox />
      <Text type="medium-text" weight="regular">
        Без пересадок
      </Text>
    </FilterItemStyled>
  )
}

export default FilterItem
