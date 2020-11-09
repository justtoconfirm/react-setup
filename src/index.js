import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Button from './Button/Button'

import './scss/main.scss'

const App = () => {
  return (
    <Button>Test</Button>
  )
}

render(
	<BrowserRouter>
  	<App />
  </BrowserRouter>,
  document.getElementById('root')
)
