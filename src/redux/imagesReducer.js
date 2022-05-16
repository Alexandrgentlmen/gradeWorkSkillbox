import { IMAGES_LOAD, SEARCH_IMAGE, CHANGE_CURRENT_PAGE, RESET_SEARCH_IMAGE, IS_SEARCHING, CHANGE_SEARCH_TEXT, RESET_SEARCH_PAGE, CHANGE_LIKE, CHANGE_IMAGES_STATE, SINGLE_IMAGES_LOAD, SINGLE_IMAGES_CLEAN } from "./types"

const initialState = {
	images: [],
	resetImage: [],
	pageNumber: 1,
	searchText: '',
	isSearching: false,
}

export const imagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case IMAGES_LOAD:
			return {
				...state,
				images: [...state.images, ...action.imagesData],
			}
		case SINGLE_IMAGES_LOAD:

			return {
				...state,
				images: [action.imagesData],
			}

		case SINGLE_IMAGES_CLEAN:

			return {
				...state,
				images: initialState.resetImage,
			}

		case CHANGE_IMAGES_STATE:
			return {
				...state,
				images: [],
			}

		case RESET_SEARCH_IMAGE:
			const imagesReset = action.imagesData;
			return {
				...state,
				images: [...imagesReset],
			}

		case SEARCH_IMAGE: {
			const imagesSearch = action.imagesData;
			return {
				...state,
				images: [...state.images, ...imagesSearch],
			}
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

		case CHANGE_LIKE: {
			const imagesList = [...state.images]
			const imageID = action.id;
			const imageIndex = imagesList.findIndex(img => img.id === imageID);
			const likedPhoto = action.newImageData.photo;
			const newImageList = imagesList.map((item) => {
				if (item.id === imagesList[imageIndex].id) {
					return likedPhoto
				} else {
					return item
				}
			});
			return {
				...state,
				images: [...newImageList]
			}
		}
		default:
			return state;
	}
}

