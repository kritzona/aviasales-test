import React from 'react'
import HomeViewStyled from './HomeViewStyled'
import Header from '../../components/organisms/Header/Header'

interface IProps {}

function HomeView(props: IProps) {
  return (
    <HomeViewStyled>
      <Header></Header>
    </HomeViewStyled>
  )
}

export default HomeView
