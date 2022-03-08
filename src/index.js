import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import App from './App';
import './settings.scss';
import './index.scss';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';


const store = createStore(rootReducer, compose(
	applyMiddleware(
		thunk,

	), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

