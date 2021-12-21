import { createApi } from 'unsplash-js';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = 'http://localhost:3000/';
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public`;

const unsplash = createApi({
	accessKey: localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : ACCESS_KEY
});

window.unsplash = unsplash;

const unsplashApi = {
	getPhotos(page, perPage) {
		return unsplash.photos.list({ page, perPage });
	},
	getFullPhoto(photoId) {
		return unsplash.photos.get({ photoId: photoId });
	},
	photoUnLike(photoId) {
		return fetch(`https://api.unsplash.com/photos/${photoId}/like`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			}
		}).then(res => res.json()).then(data => data);
	},
	photoLike(photoId) {
		return fetch(`https://api.unsplash.com/photos/${photoId}/like`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			}
		}).then(res => res.json()).then(data => data);
	},
	getAuthUser() {
		return fetch(`https://api.unsplash.com/me`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			}
		}).then(res => res.json()).then(data => data);
	},
	auth() {

		const url = new URL(window.location.href);
		const code = url.searchParams.get('code');

		if (code) {
			return fetch('https://unsplash.com/oauth/token', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					client_id: ACCESS_KEY,
					client_secret: SECRET_KEY,
					redirect_uri: REDIRECT_URL,
					code: code,
					grant_type: 'authorization_code'
				})
			}).then(response => response.json()).then(data => {
				console.log(data);
				localStorage.setItem('token', data.access_token);
				window.location.href = REDIRECT_URL;
			})
		} else {

			window.location.href = authUrl;

		}

	}
}


export default unsplashApi;