import { MODAL_CLOSE, MODAL_OPEN } from "./types"

const initialState = {
	isOpen: false,
	url: '',
}

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {

		case MODAL_OPEN:
			return {
				...state,
				isOpen: true,
				url: action.url
			}
		case MODAL_CLOSE:
			return {
				...state,
				isOpen: false
			}

		default:
			return state;
	}
}