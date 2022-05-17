import { SINGLE_IMAGES_CLEAN, SINGLE_IMAGES_LOAD } from "./types";


const initialState = {
	image: {},
	resetImage: {},
}

export const currentPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SINGLE_IMAGES_LOAD:

			return {
				...state,
				image: action.imagesData,
			}
		case SINGLE_IMAGES_CLEAN:

			return {
				...state,
				image: initialState.resetImage,
			}
		default:
			return state;
	}

}