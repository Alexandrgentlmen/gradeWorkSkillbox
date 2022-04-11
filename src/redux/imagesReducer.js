import { IMAGES_LOAD, LIKE_IMAGE, SEARCH_IMAGE, CHANGE_CURRENT_PAGE, UNLIKE_IMAGE, RESET_SEARCH_IMAGE, IS_SEARCHING, CHANGE_SEARCH_TEXT, RESET_SEARCH_PAGE } from "./types"

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

		case RESET_SEARCH_IMAGE:
			const imagesReset = action.imagesData.map(res => {
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
				images: [...imagesReset],

			}

		case SEARCH_IMAGE: {

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
				...state,
				images: [...state.images, ...imagesSearch],

			}

			// 	action.imagesData.forEach(res => state.images.push(
			// 		{
			// 			url: res.urls.thumb,
			// 			id: res.id,
			// 			likes: res.likes,
			// 			photoUser: res.user.profile_image,
			// 			name: res.user.first_name,
			// 		}
			// 	))
			// 	return state;
			// }
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
		}
		case CHANGE_SEARCH_TEXT: {
			return {
				...state,
				searchText: action.text
			}
		}

		case CHANGE_CURRENT_PAGE: {
			return {
				...state,
				pageNumber: state.pageNumber + 1
			}
		}

		case RESET_SEARCH_PAGE: {
			return {
				...state,
				pageNumber: 1
			}
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

