import { imagesAPI } from '../api/api';
import { FETCH_PHOTO, SEARCH_PHOTO } from './types';
// import { hideLoader, showAlert, showLoader } from './appReducer';
const defaultState = {

}
const photosReducer = (state = defaultState, action) => {

	switch (action.type) {
		case FETCH_PHOTO: {
			return { ...state, photos: action.payload }

		}
		case SEARCH_PHOTO:
			return {
				...state,
				...action.payload
			}

		default:
			return state;
	}
}

export const setPhotos = (photos) => ({
	type: FETCH_PHOTO, payload: photos
})

export const getPhotos = () => {

	return async (dispatch) => {
		const photos = await imagesAPI.getPhotoData().then(res => res.json())
		console.log(photos)
	}
}
// export const fetchPosts = () => {

// 	return async dispatch => {
// 		try {
// 			dispatch(showLoader())
// 			const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
// 			const json = await response.json()
// 			setTimeout(() => {
// 				dispatch({ type: FETCH_POST, payload: json })
// 				dispatch(hideLoader())
// 			}, 500)
// 		} catch (e) {
// 			dispatch(showAlert('Ошибка'))
// 			dispatch(hideLoader())
// 		}
// 	}
// }

// export const handleSearchThunkCreater = (handleChange) => {

// 	searchAPI.searching()
// 		.then(res => setImages([...res.data.results]))
// }


export default photosReducer;
