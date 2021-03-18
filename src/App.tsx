import React from 'react'
import AppStyled from './AppStyled'
import { Switch, Route } from 'react-router-dom'
import HomeView from './views/HomeView/HomeView'

interface IProps {}

const App = (props: IProps) => {
  return (
    <AppStyled>
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
      </Switch>
    </AppStyled>
  )
}

export default App
