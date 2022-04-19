import { LOAD_USER_PROFILE } from "./types";
const initialState = {

	userProfile: [],
}
export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_USER_PROFILE:
			return {
				userProfile: action.userData
			}

		default:
			return state;
	}
}
