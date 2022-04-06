import {
	ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON,
	SEARCH_IMAGE, IMAGES_LOAD, LIKE_IMAGE,
	LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, UNLIKE_IMAGE,
	LOAD_USER,
	CHANGE_CURRENT_PAGE,
	RESET_SEARCH_IMAGE,
	IS_SEARCHING
} from "./types";
import { imagesAPI, searchAPI } from './../api/api';
import { unsplashApi } from '../api/authApi'

export const loaderOn = () => ({ type: LOADER_DISPLAY_ON })
export const loaderOff = () => ({ type: LOADER_DISPLAY_OFF })
export const errorOn = (text) => ({ type: ERROR_DISPLAY_ON, text })
export const errorOff = () => ({ type: ERROR_DISPLAY_OFF })
export const isSearching = () => ({ type: IS_SEARCHING })
export const changePage = (num) => ({ type: CHANGE_CURRENT_PAGE, num })

export const loadUser = () => {
	return async (dispatch) => {
		const userData = await unsplashApi.getAuthUser();
		console.log(userData);
		try {
			dispatch({
				type: LOAD_USER,
				userData: userData
			});
		} catch (err) {
			dispatch(errorOn('Ошибка в запросе!'));
		}
	}
}

export const imagesLoad = (text, num) => {
	if (!text) {
		return async (dispatch) => {
			try {
				dispatch(loaderOn());
				const imagesData = await imagesAPI.getPhotoData();

				setTimeout(() => {
					dispatch({
						type: IMAGES_LOAD,
						imagesData: imagesData.data,
					});
					dispatch(loaderOff());
				}, 900)
			} catch (err) {
				dispatch(errorOn('Ошибка в запросе!'));
				dispatch(loaderOff());
			}
		}
	} else {
		return async (dispatch) => {
			try {
				dispatch(loaderOn());

				const imagesData = await searchAPI.searching(text, num);
				if (num === 1) {
					setTimeout(() => {
						dispatch({
							type: RESET_SEARCH_IMAGE,
							imagesData: imagesData.data.results,
							searchText: text,
							pageNumber: num,
						});
						dispatch(loaderOff());
					}, 900)
				} else {
					setTimeout(() => {
						dispatch({
							type: SEARCH_IMAGE,
							imagesData: imagesData.data.results,
							searchText: text,
							pageNumber: num,
						});
						dispatch(loaderOff());
					}, 900)
				}

			} catch (err) {
				dispatch(errorOn('Ошибка в запросе!'));
				dispatch(loaderOff());
			}
		}

	}

}

// export const imagesSearch = (text, num) => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(loaderOn());
// 			const imagesData = await searchAPI.searching(text, num);
// 			console.log('imageSearch', imagesData);
// 			setTimeout(() => {
// 				dispatch({
// 					type: SEARCH_IMAGE,
// 					imagesData: imagesData.data.results,
// 					searchText: text,

// 				});
// 				dispatch(loaderOff());
// 			}, 900)
// 		} catch (err) {
// 			dispatch(errorOn('Ошибка в запросе!'));
// 			dispatch(loaderOff());
// 		}
// 	}
// }

export const imagesLike = (id) => {
	return async (dispatch) => {
		await imagesAPI.getLikePhoto(id);
		dispatch({
			type: LIKE_IMAGE,
			id: id,
		});
	}
}

export const imagesUnlike = (id) => {
	return async (dispatch) => {
		await imagesAPI.deleteLikePhoto(id);
		dispatch({
			type: UNLIKE_IMAGE,
			id: id,
		});
	}
}


