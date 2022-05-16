import { Navigate, useLocation } from "react-router-dom";


const RequireAuth = ({children}) => {
	const location = useLocation();
	const isAuth = localStorage.getItem('token');

	if (!isAuth) {
		return <Navigate to='/auth' state={{from: location}}/>
	}
	
	return children;
	
}

export {RequireAuth};