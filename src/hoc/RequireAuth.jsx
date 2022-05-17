import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const RequireAuth = ({children}) => {
	const navigate = useNavigate();
	const isAuth = localStorage.getItem('token');

	useEffect(()=>{
		!isAuth && navigate('/auth', {replace: true});
	})

	
	return children;
	
}

export {RequireAuth};