import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { unsplashApi } from '../api/authApi';

export const RedirectAuthPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from.pathname || '/';
	unsplashApi.auth();
	const access_token = localStorage.getItem('token');	

	useEffect(()=> {
		if(access_token) {
			navigate(fromPage, {replace: true});
		}
	})

	return (
		<></>
	)
}
