import React from 'react'
import FilterStyled from './FilterStyled'
import Card from '../Card/Card'
import FilterHeader from './FilterHeader/FilterHeader'
import FilterBody from './FilterBody/FilterBody'
import Text from '../../atoms/Text/Text'

interface IProps {}

const Filter = (props: IProps) => {
  return (
    <FilterStyled>
      <Card>
        <>
          <FilterHeader />
          <FilterBody />
        </>
      </Card>
    </FilterStyled>
  )
}

export default Filter
