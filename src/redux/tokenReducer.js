import { ADD_TOKEN, DELETE_TOKEN } from "./types";

const initialState = {

	isAuth: false,
	token: '',
}
export const tokenReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TOKEN:
			return {
				isAuth: true,
				token: action.access_token
			}
		case DELETE_TOKEN:
			return {
				isAuth: false,
				token: ''
			}

		default:
			return state;
	}
}
