import { ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON, FETCH_OFF, FETCH_ON, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from "./types";

const initialState = {
	loading: false,
	error: null,
	isFetch: false,
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case LOADER_DISPLAY_ON:
			return {
				...state,
				loading: true

			}
		case LOADER_DISPLAY_OFF:
			return {
				...state,
				loading: false
			}
		case FETCH_ON:
			return {
				...state,
				isFetch: true
			}
		case FETCH_OFF:
			return {
				...state,
				isFetch: false
			}
		case ERROR_DISPLAY_ON:
			return {
				...state,
				error: action.text

			}
		case ERROR_DISPLAY_OFF:
			return {
				...state,
				error: null

			}
		default:
			return state;
	}
}