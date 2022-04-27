import  { useEffect } from 'react';
import * as axios from "axios";
const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/";

	

export const Redirect = () => {

	const setToken = () => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get('code');
		console.log(code);

		var params = new URLSearchParams();
		params.append('client_id', ACCESS_KEY);
		params.append('client_secret',SECRET_KEY);
		params.append('redirect_uri', REDIRECT_URL);
		params.append('code', code);
		params.append('grant_type', 'authorization_code');

		if (code) {
			return axios.post('https://unsplash.com/oauth/token', {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				params
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
