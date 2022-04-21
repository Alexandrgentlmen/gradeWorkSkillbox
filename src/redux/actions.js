import {
	ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON,
	SEARCH_IMAGE, IMAGES_LOAD, LIKE_IMAGE,
	LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, UNLIKE_IMAGE,
	CHANGE_CURRENT_PAGE,
	RESET_SEARCH_IMAGE,
	IS_SEARCHING,
	CHANGE_SEARCH_TEXT,
	RESET_SEARCH_PAGE,
	LOAD_USER_PROFILE,
	CHANGE_LIKE,
	CHANGE_TOTAL_LIKE,
} from "./types";
import { imagesAPI, searchAPI } from './../api/api';
import { unsplashApi } from "../api/authApi";

export const loaderOn = () => ({ type: LOADER_DISPLAY_ON })
export const loaderOff = () => ({ type: LOADER_DISPLAY_OFF })
export const errorOn = (text) => ({ type: ERROR_DISPLAY_ON, text })
export const errorOff = () => ({ type: ERROR_DISPLAY_OFF })
export const isSearching = () => ({ type: IS_SEARCHING })
export const changePage = (pageNumber) => ({ type: CHANGE_CURRENT_PAGE, pageNumber })
export const changeSearchText = (text) => ({ type: CHANGE_SEARCH_TEXT, text })
export const resetSerchPage = () => ({ type: RESET_SEARCH_PAGE })
export const changeLike = (id) => ({ type: CHANGE_LIKE, id })
export const changeTotalLike = (id) => ({ type: CHANGE_TOTAL_LIKE, id })

export const loadUserProfile = (userName) => {
	return async (dispatch) => {
		const userData = await unsplashApi.getAuthUser(userName);
		console.log(userData);
		try {
			dispatch({
				type: LOAD_USER_PROFILE,
				userData: userData
			});
		} catch (err) {
			dispatch(errorOn('Ошибка в запросе!'));
		}
	}
}

export const imagesLoad = (text, pageNumber) => {
	if (!text) {
		console.log('dispatch (imagesLoad)');
		return async (dispatch) => {
			try {
				dispatch(loaderOn());
				const imagesData = await imagesAPI.getPhotoData();

				setTimeout(() => {
					dispatch({
						type: IMAGES_LOAD,
						imagesData: imagesData.data,
						searchText: '',

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

				const imagesData = await searchAPI.searching(text, pageNumber);
				if (pageNumber === 1) {
					setTimeout(() => {
						dispatch({
							type: RESET_SEARCH_IMAGE,
							imagesData: imagesData.data.results,
							searchText: text,
							pageNumber: pageNumber,
						});
						dispatch(loaderOff());
					}, 900)
				} else {
					setTimeout(() => {
						dispatch({
							type: SEARCH_IMAGE,
							imagesData: imagesData.data.results,
							searchText: text,
							pageNumber: pageNumber,
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

export const imagesLike = (id) => {
	return async (dispatch) => {
		await imagesAPI.getLikePhoto(id);
		dispatch({
			type: LIKE_IMAGE,
			id: id,
		});
		dispatch(changeLike(id));
		dispatch(changeTotalLike(id));
	}
}

export const imagesUnlike = (id) => {
	return async (dispatch) => {
		await imagesAPI.deleteLikePhoto(id);
		dispatch({
			type: UNLIKE_IMAGE,
			id: id,
		});
		dispatch(changeLike(id));
		dispatch(changeTotalLike(id));
	}
}


