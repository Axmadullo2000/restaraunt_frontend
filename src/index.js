import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'

import './index.css'

const app = document.getElementById('root')

if (app != null) {
	const root = ReactDOM.createRoot(app)

	root.render(
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	)
}
