
import { SET_USER_DATA } from './types';

let initialState = {
	userId: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}
		default:
			return state;
	}
}

export default authReducer;