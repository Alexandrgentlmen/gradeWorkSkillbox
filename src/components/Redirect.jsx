import  { useEffect } from 'react';
import * as axios from "axios";
const qs = require('qs');

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/";

	

export const Redirect = () => {

	const setToken = () => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get('code');
		console.log(code);

		const data = {
			client_id: ACCESS_KEY,
			client_secret: SECRET_KEY,
			redirect_uri: REDIRECT_URL,
			code: code,
			grant_type: 'authorization_code'
		};
		const options = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: qs.stringify(data),
			url :'https://unsplash.com/oauth/token'
		}

		if (code) {
			return axios(options).then(response => response.json()).then(data => {
				console.log(data)
				localStorage.setItem('token', data.access_token);
			}).catch(err => { 
				if (err.response) { 
					console.log('err.response', err.response)

				} else if (err.request) { 
					// client never received a response, or request never left
					console.log('err.request', err.request)
				} else { 
					console.log('неизвестная ошибка', `${err}`)
					// anything else 
				} 
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
