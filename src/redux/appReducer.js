// appReducer это редюсер который отвечает за приложение

import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./types"


const initialState = {
	loading: false,
	alert: null
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return {
				...state, loading: true
			}
		case HIDE_LOADER:
			return {
				...state, loading: false
			}
		case SHOW_ALERT:
			return {
				...state, alert: action.payload
			}
		case HIDE_ALERT:
			return {
				...state, alert: null
			}
		default: return state
	}
}

export const showLoader = () => {
	return {
		type: SHOW_LOADER
	}
}

export const hideLoader = () => {
	return {
		type: HIDE_LOADER
	}
}

export const showAlert = (text) => {
	return dispatch => {
		dispatch({
			type: SHOW_ALERT,
			payload: text
		})
		setTimeout(() => {
			dispatch(hideAlert())
		}, 4000)
	}
}

export const hideAlert = () => {
	return {
		type: HIDE_ALERT
	}
}


