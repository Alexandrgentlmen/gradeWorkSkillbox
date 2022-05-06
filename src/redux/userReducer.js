import { DELETE_USER_PROFILE, LOAD_USER_PROFILE } from "./types";
const initialState = {

	userProfile: [],
}
export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_USER_PROFILE:
			return {
				userProfile: action.userData
			}
		case DELETE_USER_PROFILE:
			return {
				userProfile: initialState.userProfile
			}

		default:
			return state;
	}
}
