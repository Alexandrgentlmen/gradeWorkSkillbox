import  { useEffect } from 'react';
import * as axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../redux/actions';


const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/redirect";
	// REDIRECT_URL = "urn:ietf:wg:oauth:2.0:oob";
	

export const Redirect = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
				console.log(response.data.access_token);
				dispatch(addToken(response.data.access_token));				
				localStorage.setItem('token', response.data.access_token);
					navigate('/', {replace: true});	
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
