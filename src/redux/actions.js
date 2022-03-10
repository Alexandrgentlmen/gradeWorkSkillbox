import {
	ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON,
	SEARCH_IMAGE, IMAGES_LOAD, LIKE_IMAGE,
	LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON, UNLIKE_IMAGE
} from "./types";
import { imagesAPI, searchAPI } from './../api/api';

export const loaderOn = () => ({ type: LOADER_DISPLAY_ON })
export const loaderOff = () => ({ type: LOADER_DISPLAY_OFF })
export const errorOn = (text) => ({ type: ERROR_DISPLAY_ON, text })
export const errorOff = () => ({ type: ERROR_DISPLAY_OFF })

export const imagesLoad = () => {
	return async (dispatch) => {
		try {
			dispatch(loaderOn());
			const imagesData = await imagesAPI.getPhotoData();
			console.log(imagesData);
			setTimeout(() => {
				dispatch({
					type: IMAGES_LOAD,
					imagesData: imagesData.data
				});
				dispatch(loaderOff());
			}, 900)

		} catch (err) {
			dispatch(errorOn('Ошибка в запросе!'));
			dispatch(loaderOff());
		}
	}
}

export const imagesSearch = (text) => {
	return async (dispatch) => {
		try {
			dispatch(loaderOn());
			const imagesData = await searchAPI.searching(text);
			console.log('imageSearch', imagesData);
			setTimeout(() => {
				dispatch({
					type: SEARCH_IMAGE,
					imagesData: imagesData.data.results,
					searchText: text
				});
				dispatch(loaderOff());
			}, 900)
		} catch (err) {
			dispatch(errorOn('Ошибка в запросе!'));
			dispatch(loaderOff());
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


