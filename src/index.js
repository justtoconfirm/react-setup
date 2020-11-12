import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/molecules/Navigation/Navigation'
import Home from './components/templates/Home'
import About from './components/templates/About'
import Contact from './components/templates/Contact'

import './scss/main.scss'

const App = () => {
  return (
    <>
      <Navigation />

      <main role='main'>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  )
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
