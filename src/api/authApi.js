import { createApi } from 'unsplash-js';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = "urn:ietf:wg:oauth:2.0:oob";
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public`;

const unsplash = createApi({
	accessKey: localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : ACCESS_KEY
});

window.unsplash = unsplash;

export const unsplashApi = {
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
		// const url = new URL(window.location.href);
		// const code = url.searchParams.get('code');
		const code = 'h3RB9YwVnUSOO75B7yFzLUZCH_3r-KrGu2KUt52yeeE';

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
				console.log(data)
				localStorage.setItem('token', data.access_token);

			})
		} else {
			window.location.href = authUrl;
		}
	},

}
