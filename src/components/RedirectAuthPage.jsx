import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { unsplashApi } from '../api/authApi';

export const RedirectAuthPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from.pathname || '/';
	unsplashApi.auth();

	useEffect(()=> {	
			navigate(fromPage, {replace: true})
	},[fromPage, navigate])

	return (
		<></>
	)
}
