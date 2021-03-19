import React from 'react'
import FilterHeaderStyled from './FilterHeaderStyled'
import Text from '../../../atoms/Text/Text'

interface IProps {}

const FilterHeader = (props: IProps) => {
  return (
    <FilterHeaderStyled>
      <Text type="normal-text" weight="semibold" transform="uppercase">
        Количество пересадок
      </Text>
    </FilterHeaderStyled>
  )
}

export default FilterHeader
