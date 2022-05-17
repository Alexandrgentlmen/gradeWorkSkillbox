import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import { Layout } from './components/Layout';
import { AuthPage } from './components/AuthPage';
import { CurrentImage } from './components/CurrentImage';
import { Redirect } from './components/Redirect';
import Modal from './components/Modal';
import { RequireAuth } from './hoc/RequireAuth';



function App() {

	return (
		<div >
			<Modal />
			<Routes>
				<Route path="auth" element={<AuthPage />} />
				<Route path="redirect" element={<Redirect />} />
				<Route path="/" element={<Layout />}>
					<Route exact index element={<Home />} />
					<Route path=":photoId" element={
						<RequireAuth>
							<CurrentImage />
						</RequireAuth>
					} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div >
	);
}

export default App;
