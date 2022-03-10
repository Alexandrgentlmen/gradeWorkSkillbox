import { IMAGES_LOAD, LIKE_IMAGE, SEARCH_IMAGE, UNLIKE_IMAGE } from "./types"

const initialState = {
	images: [],
	searchText: '',
}

export const imagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case IMAGES_LOAD:
			const images = action.imagesData.map(res => {
				return {
					url: res.urls.thumb,
					id: res.id,
					likes: res.likes,
					photoUser: res.user.profile_image,
					name: res.user.first_name,
				}
			})
			return {
				...state,
				images: [...state.images, ...images]
			}

		case SEARCH_IMAGE:

			const imagesSearch = action.imagesData.map(res => {
				return {
					url: res.urls.thumb,
					id: res.id,
					likes: res.likes,
					photoUser: res.user.profile_image,
					name: res.user.first_name,
				}
			})
			return {

				images: [...state.images, ...imagesSearch],
				searchText: action.searchText
			}

		case LIKE_IMAGE:

			return {
				...state,
				id: action.id
			}

		case UNLIKE_IMAGE:

			return {
				...state,
				id: action.id
			}

		default:
			return state;
	}
}

