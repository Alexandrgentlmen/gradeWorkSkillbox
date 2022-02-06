import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './redux/rootReducer';

import App from './App';
import './settings.scss';
import './index.scss';

// import thunk from 'redux-thunk'
// const initialState = [];


render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store} >
				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter >,

	document.getElementById('root')
);

