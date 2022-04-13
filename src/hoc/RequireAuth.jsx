import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'

const RequireAuth = ({children}) => {
	const location = useLocation();
	const access_token = localStorage.getItem('token');	

	if(!access_token) {
		return < Navigate to='/auth' state={{from: location}}/>
	}
	return children;
}

export {RequireAuth};
 