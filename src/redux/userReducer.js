import { LOAD_USER } from "./types";
const initialState = {
	user: []
}
export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_USER:
			return {

				user: action.userData
			}

		default:
			return state;
	}
}
