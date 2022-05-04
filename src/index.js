import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import App from './App';
import './settings.scss';
import './index.scss';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(rootReducer, compose(
	applyMiddleware(
		thunk,

	), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
// const store = createStore(rootReducer, compose(
// 	applyMiddleware(
// 		thunk,

// 	)
// ));


render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

