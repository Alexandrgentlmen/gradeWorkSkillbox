import { SEARCH_IMAGE } from "./types";
const initialState = {
	images: []
}
export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_IMAGE:
			const images = action.imagesData.map(res => {
				return {
					url: res.urls.thumb,
					id: res.id
				}
			})
			return {

				images: [...state.images, ...images]
			}

		default:
			return state;
	}
}
