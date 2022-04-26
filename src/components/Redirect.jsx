import React, { useEffect } from 'react';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/";

export const Redirect = () => {

	useEffect(() => {
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
				console.log(data)
				localStorage.setItem('token', data.access_token);

			})
		}
		
	},[])
	return (
		<></>
	)
}
