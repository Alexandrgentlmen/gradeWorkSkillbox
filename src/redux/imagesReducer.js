import { IMAGES_LOAD, SEARCH_IMAGE, CHANGE_CURRENT_PAGE, RESET_SEARCH_IMAGE, IS_SEARCHING, CHANGE_SEARCH_TEXT, RESET_SEARCH_PAGE, CHANGE_LIKE, CHANGE_TOTAL_LIKE } from "./types"

const initialState = {
	images: [],
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

		case RESET_SEARCH_IMAGE:
			const imagesReset = action.imagesData
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
					console.log('CHANGE_LIKE NEW OBJECT', likedPhoto);
					return likedPhoto
				} else {
					return item
				}

			})


			return {
				...state,
				images: [...newImageList]
			}
		}


		default:
			return state;
	}
}

