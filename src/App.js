import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import NotFound from './components/NotFound';
import Home from './components/Home';
import { Layout } from './components/Layout';
import Spin from './components/Spin';
import { RedirectAuthPage } from './components/RedirectAuthPage';
import { RequireAuth } from './hoc/RequireAuth';
import { CurrentImage } from './components/CurrentImage';

function App() {

	return (
		<div className="App">
			<Spin />
			<Routes>

				<Route path="/" element={
					<RequireAuth>
						<Layout />
					</RequireAuth>
				}>

					<Route exact index element={<Home />} />
					<Route path="auth" element={<RedirectAuthPage />} />
					<Route path=":photoId" element={<CurrentImage />} />
					<Route path="*" element={<NotFound />} />
				</Route>

			</Routes>

		</div >
	);
}

export default App;
