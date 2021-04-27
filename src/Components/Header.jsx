import React from 'react'
import '../Style/Header.scss'
import { Main } from './Main'
import { Link, Route, Switch } from 'react-router-dom'
import { About } from './About'


export const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header__container">
        <div className="header__img">
          <div>W</div>
          <div>E</div>
        </div>
        <div className="header__logo">
          <span className="header__upperLetter">R</span> 
          devs
        </div>
      </div>
      <div className="header__container">
        <Link className="header__btn" to="/"  >Home</Link>
        <Link className="header__btn" to="/About">About us</Link>
      </div>
    </header>
    <Switch>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/">
        <Main />
      </Route>
      </Switch>
    </>
  )
}

