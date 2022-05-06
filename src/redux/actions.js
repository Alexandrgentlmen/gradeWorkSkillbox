import {
	ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON,
	SEARCH_IMAGE, IMAGES_LOAD,
	LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON,
	CHANGE_CURRENT_PAGE,
	RESET_SEARCH_IMAGE,
	IS_SEARCHING,
	CHANGE_SEARCH_TEXT,
	RESET_SEARCH_PAGE,
	LOAD_USER_PROFILE,
	CHANGE_LIKE,
	CHANGE_TOTAL_LIKE,
	CHANGE_IMAGES_STATE,
	MODAL_OPEN,
	MODAL_CLOSE,
	ADD_TOKEN,
	DELETE_TOKEN,
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
export const resetSerchPage = (pageNumber) => ({ type: RESET_SEARCH_PAGE, pageNumber })
export const changeLike = (index, id, newImageData) => ({ type: CHANGE_LIKE, index, id, newImageData })
export const changeTotalLike = (id) => ({ type: CHANGE_TOTAL_LIKE, id })
export const changeImagesState = () => ({ type: CHANGE_IMAGES_STATE })

export const openModal = (urlReg) => ({ type: MODAL_OPEN, urlReg })
export const closeModal = () => ({ type: MODAL_CLOSE })

export const addToken = (access_token) => ({ type: ADD_TOKEN, access_token })
export const deleteToken = () => ({ type: DELETE_TOKEN })

export const loadUserProfile = (userName) => {
	return async (dispatch) => {
		const userData = await unsplashApi.getAuthUser(userName);

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
		console.log('dispatch (imagesLoad)', pageNumber);
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
							pageNumber: 1,
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

export const imagesLike = (index, id) => {
	return async (dispatch) => {
		const newImageData = await imagesAPI.getLikePhoto(id);

		console.log('imagesLike action', newImageData);
		dispatch(changeLike(index, id, newImageData));

	}
}

export const imagesUnlike = (index, id) => {
	return async (dispatch) => {
		const newImageData = await imagesAPI.deleteLikePhoto(id);
		console.log('imagesUnlike action', newImageData);
		dispatch(changeLike(index, id, newImageData));

	}
}


