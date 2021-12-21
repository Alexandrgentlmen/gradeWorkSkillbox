import React from 'react';
import ReactDOM from 'react-dom';
import './settings.scss';
import './index.scss';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import thunkMiddleware from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'
// import { Provider } from "react-redux";
// import rootReducer from './redux/reducers/index';


// const initialState = [];
// const store = createStore(
// 	rootReducer,
// 	applyMiddleware(thunkMiddleware),
// 	initialState);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

