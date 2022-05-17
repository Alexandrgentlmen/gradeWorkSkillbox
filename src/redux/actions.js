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
	DELETE_USER_PROFILE,
	SINGLE_IMAGES_LOAD,
	FETCH_ON,
	FETCH_OFF,
	SINGLE_IMAGES_CLEAN,
} from "./types";
import { imagesAPI, searchAPI } from './../api/api';
import { unsplashApi } from "../api/authApi";

export const loaderOn = () => ({ type: LOADER_DISPLAY_ON })
export const loaderOff = () => ({ type: LOADER_DISPLAY_OFF })
export const fetchingOn = () => ({ type: FETCH_ON })
export const fetchingOff = () => ({ type: FETCH_OFF })
export const errorOn = (text) => ({ type: ERROR_DISPLAY_ON, text })
export const errorOff = () => ({ type: ERROR_DISPLAY_OFF })
export const isSearching = () => ({ type: IS_SEARCHING })
export const changePage = (pageNumber) => ({ type: CHANGE_CURRENT_PAGE, pageNumber })
export const changeSearchText = (text) => ({ type: CHANGE_SEARCH_TEXT, text })
export const resetSerchPage = (pageNumber) => ({ type: RESET_SEARCH_PAGE, pageNumber })
export const changeLike = (index, id, newImageData) => ({ type: CHANGE_LIKE, index, id, newImageData })
export const changeTotalLike = (id) => ({ type: CHANGE_TOTAL_LIKE, id })
export const changeImagesState = () => ({ type: CHANGE_IMAGES_STATE })
export const cleanSingleImage = () => ({ type: SINGLE_IMAGES_CLEAN })
export const openModal = (urlReg) => ({ type: MODAL_OPEN, urlReg })
export const closeModal = () => ({ type: MODAL_CLOSE })
export const addToken = (access_token) => ({ type: ADD_TOKEN, access_token })
export const deleteToken = () => ({ type: DELETE_TOKEN })
export const deleteUserProfile = () => ({ type: DELETE_USER_PROFILE })
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

export const loadSingleImage = (id) => {
	return async (dispatch) => {
		try {

			const imagesData = await imagesAPI.getPhotoById(id);
			setTimeout(() => {
				dispatch({
					type: SINGLE_IMAGES_LOAD,
					imagesData: imagesData,
				});
				dispatch(fetchingOn());
			}, 900)
		} catch (err) {
			dispatch(errorOn('Ошибка в запросе!'));
			dispatch(fetchingOff());
		}
	}
}

export const imagesLike = (index, id) => {
	return async (dispatch) => {
		dispatch(loaderOn());
		const newImageData = await imagesAPI.getLikePhoto(id);
		dispatch(changeLike(index, id, newImageData));
		dispatch(loaderOff());
	}
}

export const imagesUnlike = (index, id) => {
	return async (dispatch) => {
		dispatch(loaderOn());
		const newImageData = await imagesAPI.deleteLikePhoto(id);
		dispatch(changeLike(index, id, newImageData));
		dispatch(loaderOff());
	}
}

export const imagesLoad = (text, pageNumber) => {
	if (!text) {
		console.log('dispatch (imagesLoad)', pageNumber, text);
		return async (dispatch) => {
			dispatch(fetchingOff());
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
			dispatch(fetchingOff());
			try {
				dispatch(loaderOn());
				const imagesData = await searchAPI.searching(text, pageNumber);
				if (pageNumber === 1) {
					console.log('dispatch (SEARCH_IMAGE 1page)', pageNumber, text);
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
					console.log('dispatch (SEARCH_IMAGE >1)', pageNumber, text);
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



