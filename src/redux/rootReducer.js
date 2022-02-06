import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from "./appReducer";
import photosReducer from "./photosReducer";
import authReducer from './authReducer';



export const rootReducer = combineReducers({
	photos: photosReducer,
	app: appReducer,
	authorize: authReducer,
});

export const store = createStore(rootReducer, compose(
	composeWithDevTools(applyMiddleware(thunk)))
);
