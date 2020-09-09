import React from 'react'
import { render } from 'react-dom'
import Button from './Button/Button'

const App = () => {
	return (
		<Button>Test</Button>
	)
}

render(
    <App />,
    document.getElementById('root')
)