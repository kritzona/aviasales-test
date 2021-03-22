import React from 'react'
import HomeViewStyled from './HomeViewStyled'
import Header from '../../components/organisms/Header/Header'
import MainContentContainer from '../../containers/MainContentContainer/MainContentContainer'

interface IProps {}

function HomeView(props: IProps) {
  return (
    <HomeViewStyled>
      <Header />
      <MainContentContainer />
    </HomeViewStyled>
  )
}

export default HomeView
