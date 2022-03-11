import * as axios from "axios";
import { unsplashApi } from './authApi';


const apiRoot = "https://api.unsplash.com";
const accessKey = '6gnUQN0O0SrT0qs1oNRTpr0EBTur0lXlmOQVTIh2iLQ';

export const imagesAPI = {
	getPhotoData() {
		return axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
		// return axios.get(`https://jsonplaceholder.typicode.com/photos`)
	},

	getLikePhoto(id) {
		unsplashApi.auth();
		return fetch(`${apiRoot}/photos/${id}/like`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			},
		})
	},
	deleteLikePhoto(id) {
		unsplashApi.auth();
		return fetch(`${apiRoot}/photos/${id}/like`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			},
		})
	},
}
export const searchAPI = {
	searching(handleChange) {
		return axios.get(`${apiRoot}/search/photos?per_page=12&query=${handleChange}&client_id=${accessKey}&count=10`)
	}
}


