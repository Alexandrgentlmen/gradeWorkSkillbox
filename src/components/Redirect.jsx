import  { useCallback, useEffect } from 'react';
import * as axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addToken } from '../redux/actions';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	SECRET_KEY = process.env.REACT_APP_SECRETKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/redirect";
	// REDIRECT_URL = "urn:ietf:wg:oauth:2.0:oob";
	
export const Redirect = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const setToken = useCallback(() => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get('code');

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
				const token = response.data.access_token;
				dispatch(addToken(token));				
				localStorage.setItem('token', token);
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
	}, [dispatch,navigate])

	useEffect(() => {
    setToken();
  }, [setToken]);

	return (
		<></>
	)
}
