
import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom'

const RequireAuth = ({children}) => {
	const isAuth = useSelector(state => state.tokenReducer.isAuth);
	// const access_token = localStorage.getItem('token');	
	
	if(!isAuth) {
		// return < Navigate to='/auth' />
		return < Navigate to='/' />
	}
	return children;
}

export {RequireAuth};
 