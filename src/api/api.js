import * as axios from "axios";

const apiRoot = "https://api.unsplash.com";
const accessKey = process.env.REACT_APP_ACCESSKEY;

export const imagesAPI = {
	getPhotoData() {
		return axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
	}
}

export const searchAPI = {
	searching(handleChange) {
		return axios
			.get(`${apiRoot}/search/photos?query=${handleChange}&client_id=${accessKey}`)
	}
}