import React from 'react';
import { unsplashApi } from '../api/authApi';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	REDIRECT_URL = "urn:ietf:wg:oauth:2.0:oob";
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+read_user+write_user+write_likes`;


export const RedirectAuthPage = () => {
	window.location.href = authUrl;
	
	unsplashApi.auth();

	return (
		<></>
	)
}
