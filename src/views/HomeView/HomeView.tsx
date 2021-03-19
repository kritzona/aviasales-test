import React from 'react'
import HomeViewStyled from './HomeViewStyled'
import Header from '../../components/organisms/Header/Header'
import MainContent from '../../components/organisms/MainContent/MainContent'

interface IProps {}

function HomeView(props: IProps) {
  return (
    <HomeViewStyled>
      <Header></Header>
      <MainContent></MainContent>
    </HomeViewStyled>
  )
}

export default HomeView
