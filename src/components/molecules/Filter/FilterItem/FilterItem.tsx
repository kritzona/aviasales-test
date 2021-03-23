import React from 'react'
import FilterItemStyled from './FilterItemStyled'
import Checkbox from '../../../atoms/Checkbox/Checkbox'
import Text from '../../../atoms/Text/Text'

interface IProps {
  value: string
  checked: boolean
  onClick?: () => void
}

const FilterItem = (props: IProps) => {
  const handleClick = () => (props.onClick ? props.onClick() : null)

  return (
    <FilterItemStyled onClick={() => handleClick()}>
      <Checkbox checked={props.checked} />
      <Text type="medium-text" weight="regular">
        {props.value}
      </Text>
    </FilterItemStyled>
  )
}

export default FilterItem
