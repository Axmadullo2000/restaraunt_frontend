import { createContext, useReducer } from 'react'

import { initialState, reducer } from './reducer'

export const myContext = createContext()

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<myContext.Provider value={{ state, dispatch }}>
			{children}
		</myContext.Provider>
	)
}
