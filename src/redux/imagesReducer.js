import { IMAGES_LOAD, LIKE_IMAGE, SEARCH_IMAGE, CHANGE_CURRENT_PAGE, UNLIKE_IMAGE, RESET_SEARCH_IMAGE, IS_SEARCHING } from "./types"

const initialState = {
	images: [],
	pageNumber: 1,
	searchText: '',
	isSearching: false,
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
				images: [...state.images, ...images],

			}

		case RESET_SEARCH_IMAGE: {
			return action.imagesData.map(res => ({

				url: res.urls.thumb,
				id: res.id,
				likes: res.likes,
				photoUser: res.user.profile_image,
				name: res.user.first_name,

			}))
		}

		case SEARCH_IMAGE: {

			action.imagesData.forEach(res => state.images.push(
				{
					url: res.urls.thumb,
					id: res.id,
					likes: res.likes,
					photoUser: res.user.profile_image,
					name: res.user.first_name,
				}
			))
			return state;
		}
		// images: [...state.images, ...action.imagesData.map(res => {
		// 	return {
		// 		url: res.urls.thumb,
		// 		id: res.id,
		// 		likes: res.likes,
		// 		photoUser: res.user.profile_image,
		// 		name: res.user.first_name,
		// 	}
		// })],
		// searchText: action.searchText,


		case CHANGE_CURRENT_PAGE: {
			return { ...state, pageNumber: state.pageNumber + 1 }
		}

		case IS_SEARCHING: {
			return {
				...state,
				isSearching: state.isSearching
					? false
					: true
			}
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

