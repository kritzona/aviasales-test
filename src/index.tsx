import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import LightTheme from './themes/LightTheme/LightTheme'
import GlobalStyle from './themes/GlobalStyle/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
