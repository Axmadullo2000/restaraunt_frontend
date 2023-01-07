export const initialState = {
	restaurantData: [],
	searchedData: []
}

export function reducer(state = initialState, action) {
	const { type, payload } = action

	switch (type) {
		case 'ADD_NEW_DATA':
			return {
				...state,
				restaurantData: payload,
			}

			default:
			return { ...state }
	}
}
