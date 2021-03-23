import React from 'react'
import FilterHeaderStyled from './FilterHeaderStyled'
import Text from '../../../atoms/Text/Text'

interface IProps {
  title: string
}

const FilterHeader = (props: IProps) => {
  return (
    <FilterHeaderStyled>
      <Text type="normal-text" weight="semibold" transform="uppercase">
        {props.title}
      </Text>
    </FilterHeaderStyled>
  )
}

export default FilterHeader
