import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Button from './Button/Button'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import './scss/main.scss'

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </main>
  )
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
