
import { Outlet } from 'react-router-dom';
import Header from './Header';


const Layout = () => {
	return (
			<>
			<Header />

			<main className="wrap">
					<Outlet />
			</main>

			<footer className="wrap">&copy; REACT PHOTER 2022</footer>
			</>
	)
}

export {Layout}
