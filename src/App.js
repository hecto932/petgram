import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { NoRegisteredUser } from './pages/NoRegisteredUser'
import { User } from './pages/User'
import { NavBar } from './components/NavBar'

import { Router } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) => isAuth
            ? (
              <Router>
                <Favs path='/favs' />
                <User path='/user' />
              </Router>
            )
            : (
              <Router>
                <NoRegisteredUser path='/favs' />
                <NoRegisteredUser path='/user' />
              </Router>
            )
        }
      </UserLogged>
      <NavBar />
    </div>
  )
}

export default App
