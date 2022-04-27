
import { Navigate} from 'react-router-dom'

const RequireAuth = ({children}) => {

	const access_token = localStorage.getItem('token');	
	
	if(!access_token) {
		return < Navigate to='/auth' />
	}
	return children;
}

export {RequireAuth};
 