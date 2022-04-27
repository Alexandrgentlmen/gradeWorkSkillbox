import  { useEffect } from 'react';
import * as axios from "axios";
const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/";

	const createFormParams = (params) => {
    return Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&')
}

export const Redirect = () => {

	const setToken = () => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get('code');
		console.log(code);

		if (code) {
			return axios.post('https://unsplash.com/oauth/token', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				data: createFormParams({
					client_id: ACCESS_KEY,
					client_secret: SECRET_KEY,
					redirect_uri: REDIRECT_URL,
					code: code,
					grant_type: 'authorization_code'
				}),
			}).then(response => response.json()).then(data => {
				console.log(data)
				localStorage.setItem('token', data.access_token);
			}).catch(error => {
				alert('Неизвестная ошибка:', error.toJSON());
			});
		}	
	}

	useEffect(() => {
    setToken();
  }, []);

	return (
		<></>
	)
}
