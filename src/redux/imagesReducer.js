import { IMAGES_LOAD, SEARCH_IMAGE, CHANGE_CURRENT_PAGE, RESET_SEARCH_IMAGE, IS_SEARCHING, CHANGE_SEARCH_TEXT, RESET_SEARCH_PAGE, CHANGE_LIKE, CHANGE_IMAGES_STATE } from "./types"

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

		case CHANGE_IMAGES_STATE:
			console.log('CHANGE_IMAGES_STATE');
			return {
				...state,
				images: [],
			}

		case RESET_SEARCH_IMAGE:

			const imagesReset = action.imagesData;
			console.log('RESET_SEARCH_IMAGE', imagesReset);
			return {
				...state,
				images: [...imagesReset],
			}

		case SEARCH_IMAGE: {
			const imagesSearch = action.imagesData;
			console.log('SEARCH_IMAGE', imagesSearch)
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
				pageNumber: initialState.pageNumber
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

