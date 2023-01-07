import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from './context/Context'
import App from './App'

import './index.css'

const app = document.getElementById('root')

if (app != null) {
	const root = ReactDOM.createRoot(app)

	root.render(
		<Provider>
			<Router>
				<App />
			</Router>
		</Provider>
	)
}
