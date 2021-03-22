import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import LightTheme from './themes/LightTheme/LightTheme'
import GlobalStyle from './themes/GlobalStyle/GlobalStyle'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={LightTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
