import  { useEffect } from 'react';
import * as axios from "axios";
import { useNavigate } from 'react-router-dom';


const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/redirect";

	

export const Redirect = () => {
	const navigate = useNavigate();

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
				'Content-Type': 'application/json',
			},
			data,
			url :'https://unsplash.com/oauth/token'
		}

		if (code) {
			return axios(options).then(response => {
				localStorage.setItem('token', response.data.access_token);
				if(response.data.access_token) {
					navigate('/');
				}
			}).catch(err => { 
				if (err.response) { 
					console.log('err.response', err.response)
				} 
			  if (err.request) { 
					// client never received a response, or request never left
					console.log('err.request', err.request)
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
